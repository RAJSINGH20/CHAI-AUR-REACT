import conf from "../config/conf.js"; // ✅ Fixed path
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client;
  account;

  constructor() {
    this.client = new Client();
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
        name || '' // ✅ Ensure name is at least an empty string
      );
      if (userAcc) {
        return this.login({ email, password }); // auto-login after registration
      } else {
        return userAcc;
      }
    } catch (error) {
      console.error("Error in createAccount:", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createSession(email, password);
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error in getCurrentUser:", error);
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Error in logout:", error);
      throw error;
    }
  }
}

const authservice = new AuthServices();

export default authservice;
