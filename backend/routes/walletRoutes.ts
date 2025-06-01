import {WalletController} from "../controllers";
import {Request, Response, Router} from "express";

export const walletRoutes = Router();
const walletController = new WalletController();

walletRoutes.get("/wallet", async (req: Request, res: Response) => {
    res.send(await walletController.getAllWallets());
})

walletRoutes.get("/wallet:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await walletController.getWalletById(id));
})

walletRoutes.post("/wallet/find", async (req: Request, res: Response) => {
    const { currency } = req.body;
    try {
        const wallet = await walletController.getWalletByCurrency(currency);
        res.status(200).send(wallet);
    } catch (error: any) {
        res.status(404).send({ error: error.message });
    }
});

walletRoutes.post("/wallet", async (req: Request, res: Response) => {
    const data = req.body;
    try{
        res.status(201).send(await walletController.createWallet(data));
    }
    catch (error: any) {
        res.status(400).send({ error: error.message });
    }
})

walletRoutes.delete("/wallet/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        res.status(200).send(await walletController.deleteWallet(id));
    }
    catch (error: any) {
        res.status(404).send({ error: error.message });
    }
})