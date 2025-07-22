import conf from "../confifg/conf";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client;
  account;

  constructor() {
    this.client = new Client(); // Capital 'C' in Client
    this.client
      .setEndpoint(conf.appwrite_url)
      .setProject(conf.appwrite_PROJECT_ID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAcc = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAcc) {
        // Call login directly
        return this.login({ email, password });
      } else {
        return userAcc;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password); // Fixed typo: create**Email**Session
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("The service error:", error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new AuthServices();

export default authservice;
