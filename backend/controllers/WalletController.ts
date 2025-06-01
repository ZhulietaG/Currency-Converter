import { WalletModel} from "../models";
import {CreateWallet} from "../common/";

const walletModel = new WalletModel();
export class WalletController {

    async getAllWallets() {
        return await walletModel.getAll();
    }

    async getWalletById(id: string) {
        return await walletModel.getById(id.toString());
    }

    async getWalletByCurrency(currency: string) {
        return await walletModel.getByCurrency(currency);
    }

    async createWallet(wallet: CreateWallet) {
        return await walletModel.create(wallet);
    }

    async deleteWallet(id: string) {
        return await walletModel.delete(id);
    }
}