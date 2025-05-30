import {Request, Response, Router} from "express";
import {UserController} from "../controllers";

const userController = new UserController();
export const userRoutes = Router();

userRoutes.get("/user", async (req: Request, res: Response) => {
    res.send(await userController.getAllUsers());
})
userRoutes.get("user/emails", async (req: Request, res: Response) => {
    res.send(await userController.getAllEmails());
})
userRoutes.get("/user/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await userController.getUserById(id));
})
userRoutes.post("/user", async (req: Request, res: Response) => {
    const data = req.body;
    res.send(await userController.createUser(data));
})
userRoutes.put("/user/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    res.send(userController.updateUser(id, data));
})
userRoutes.delete("/user/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await userController.deleteUser(id));
})

userRoutes.post("user/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const result = await userController.login(email, password);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(401).send({ error: error.message });
    }
});
