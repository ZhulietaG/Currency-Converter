import {Request, Response, Router} from "express";
import {UserController} from "../controllers";

const userController = new UserController();
export const userRoutes = Router();

userRoutes.get("/user", async (req: Request, res: Response) => {
    res.send(await userController.getAllUsers());
})
userRoutes.get("emails", async (req: Request, res: Response) => {
    res.send(await userController.getAllEmails());
})
userRoutes.get("/user/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(await userController.getUserById(id));
})

userRoutes.post("/user/find", async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const user = await userController.getUserByEmail(email);
        res.status(200).send(user);
    } catch (error: any) {
        res.status(404).send({ error: error.message });
    }
});

userRoutes.post("/user", async (req: Request, res: Response) => {
    const data = req.body;
    try{
        res.status(201).send(await userController.createUser(data));
    }
    catch (error: any) {
        res.status(400).send({ error: error.message });
    }
})
userRoutes.put("/user/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    try {
        res.status(200).send(userController.updateUser(id, data));
    }
    catch(error: any) {
        res.status(400).send({ error: error.message });
    }
})
userRoutes.delete("/user/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        res.status(200).send(await userController.deleteUser(id));
    }
    catch (error: any) {
        res.status(404).send({ error: error.message });
    }
})

userRoutes.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const result = await userController.login(email, password);
        res.status(200).send(result);
    } catch (error: any) {
        res.status(401).send({ error: error.message });
    }
});
