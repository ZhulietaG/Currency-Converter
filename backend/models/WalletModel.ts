import {Database} from "./Database";
import {Wallet, CreateWallet, User} from "../common";
import {Pool, RowDataPacket} from "mysql2/promise";

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
        const result = await this.db.execute<Wallet[] & RowDataPacket[]>(`SELECT * FROM walletss WHERE id = ?`, [id]);
        return result[0][0];
    }

    async getByCurrency(currency: string) {
        const result = await this.db.execute<User[] & RowDataPacket[]>(`SELECT * FROM users WHERE currency = ?`, [currency]);
        return result[0][0];
    }

    async create(wallet: CreateWallet) {
        const [result] = await this.db.execute(`INSERT INTO wallets( amount, curency) VALUES (?, ?)`, [
            wallet.amount, wallet.currency
        ]);
        return `Wallet successfully created`;
    }

    async delete(id: string) {
        const [rows] = await this.db.execute(`DELETE FROM wallets WHERE id = ?`, [id]);
        return rows;
    }
}