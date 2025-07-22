import conf from "../config/conf";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    account;
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwrite_url)
            .setProject(conf.appwrite_PROJECT_ID);
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({ tittle, slug, content, feauturedimage, status, useid }) {
        try {
            return await this.database.createDocument(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_COLLECTION_ID,
                ID.unique(),
                { tittle, slug, content, feauturedimage, status, useid }
            );
        } catch (error) {
            console.log(error);
        }
    }

    async update_post({ slug, tittle, content, feauturedimage, status, useid }) {
        try {
            return await this.database.updateDocument(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_COLLECTION_ID,
                slug,
                { tittle, slug, content, feauturedimage, status, useid }
            );
        } catch (error) {
            console.log(error);
        }
    }

    async delete_post({ slug }) {
        try {
            return await this.database.deleteDocument(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_COLLECTION_ID,
                slug
            );
        } catch (error) {
            console.log(error);
        }
    }

    async get_all_post() {
        try {
            return await this.database.listDocuments(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_COLLECTION_ID
            );
        } catch (error) {
            console.log(error);
        }
    }

    async getPost() {
        try {
            return await this.database.listDocuments(
                conf.appwrite_DATABASE_ID,
                conf.appwrite_COLLECTION_ID,
                [Query.equal("status", "Active")]
            );
        } catch (error) {
            console.log(error);
        }
    }

    async uploadfile(file) {
        try {
            return await this.storage.createFile(
                conf.appwrite_BUCKET_KEY,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log(error);
        }
    }
    async deleteFile(fileId) {
    try {
        return await this.storage.deleteFile(
            conf.appwrite_BUCKET_KEY,
            fileId
        );
    } catch (error) {
        console.log(error);
    }
}

}

const service = new Service();
export default service;
