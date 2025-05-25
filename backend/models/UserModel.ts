import {Database} from "./Database";
import {User, CreateUser} from "../common";
import {Pool, RowDataPacket} from "mysql2/promise";
const { v4: uuidv4 } = require('uuid');

export class UserModel {
    db: Pool;
    constructor() {
        this.db = new Database().conn;
    }
    async getAll() {
        const [rows] = await this.db.query("SELECT * FROM users");
        return rows;
    }
    async getById(id: string) {
        const result = await this.db.execute<User[] & RowDataPacket[]>(`SELECT * FROM users WHERE id = ?`, [id]);
        return result[0][0];
    }
    async create(user: CreateUser) {
        const [result] = await this.db.execute(`INSERT INTO users(id, username, email, password, is_active) VALUES (?, ?, ?, ?, ?)`, [
            uuidv4(), user.username, user.email, user.password, user.isActive
        ]);
        return `User with id created`;
    }
    async update(id: string, user: any) {
        const fields = Object.keys(user).map(key => `${key} = ?`).join(',');
        const values = Object.values(user);
        values.push(id);
        const result = await this.db.execute(`UPDATE users SET ${fields} WHERE id = ?`, values)
        return `Updated user ${id}`
    }
    async delete(id: string) {
        const [rows] = await this.db.execute(`DELETE FROM users WHERE id = ?`, [id]);
        return rows;
    }
}