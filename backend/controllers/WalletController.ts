import { WalletModel} from "../models";
import {CreateWallet} from "../common/";

const walletModel = new WalletModel();
export class WalletController {

    async getAllWallets() {
        return await walletModel.getAll();
    }

    async getWalletById(id: string) {
        return await walletModel.getById(id);
    }

    async getWalletByCurrency(currency: string) {
        return await walletModel.getByCurrency(currency);
    }

    async getWalletByUserId(id: string) {
        return await walletModel.getWalletByUserId(id);
    }

    async createWallet(id: string, wallet: CreateWallet) {
        return await walletModel.create(id ,wallet);
    }

    updateWallet(id: string, wallet: any) {
        return walletModel.update(id, wallet);
    }

    async deleteWallet(id: string) {
        return await walletModel.delete(id);
    }
}