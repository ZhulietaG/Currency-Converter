import {Database} from "./Database";
import {Wallet, CreateWallet, User} from "../common";
import {Pool, RowDataPacket} from "mysql2/promise";
const { v4: uuidv4 } = require('uuid');

export class WalletModel {
    db: Pool;

    constructor() {
        this.db = new Database().conn;
    }

    async getAll() {
        const [rows] = await this.db.query(`SELECT * FROM wallets`);
        return rows;
    }

    async getById(id: string) {
        const result = await this.db.execute<Wallet[] & RowDataPacket[]>(`SELECT * FROM wallets WHERE id = ?`, [id]);
        return result[0][0];
    }

    async getByCurrency(currency: string) {
        const result = await this.db.execute<User[] & RowDataPacket[]>(`SELECT * FROM wallets WHERE currency = ?`, [currency]);
        return result[0][0];
    }

    async create(id: string, wallet: CreateWallet) {
        const [result] = await this.db.execute(`INSERT INTO wallets( id,amount, currency, user_id) VALUES (?, ?, ?, ?)`, [
            uuidv4() ,wallet.amount, wallet.currency, id
        ]);
        return `Wallet successfully created`;
    }

    async update(id: string, wallet: any) {
        const fields = Object.keys(wallet).map(key => `${key} = ?`).join(',');
        const values = Object.values(wallet);
        values.push(id);
        const result = await this.db.execute(`UPDATE wallets SET ${fields} WHERE id = ?`, values)
        return `Updated wallet ${id}`
    }

    async delete(id: string) {
        const [rows] = await this.db.execute(`DELETE FROM wallets WHERE id = ?`, [id]);
        return rows;
    }
}