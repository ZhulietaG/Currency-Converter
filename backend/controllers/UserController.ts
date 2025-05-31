import {UserModel} from "../models";
import {CreateUser} from "../common/";
import { generateToken } from "../utils/auth";

const userModel = new UserModel();
export class UserController {

    async getAllUsers() {
        return await userModel.getAll();
    }
    async getAllEmails() {
        return await userModel.getAllEmails();
    }
    async getUserById(id: string) {
        return await userModel.getById(id);
    }

    async getUserByEmail(email: string) {
        return await userModel.getByEmail(email);
    }

    async createUser(user: CreateUser) {
        return await userModel.create(user);
    }
    updateUser(id: string, user: any) {
        return userModel.update(id, user);
    }
    async deleteUser(id: string) {
        return await userModel.delete(id);
    }

    async loggedUser(email: string, password: string) {
        const user = await userModel.getByEmail(email);

        if (!user) {
            throw new Error ("User not found");
        }
        if (user.password != password) {
            throw new Error ("Invalid email or password");
        }

        return await userModel.login(email, password);

    }

}
