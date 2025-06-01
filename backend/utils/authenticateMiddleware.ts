import { RequestHandler } from "express";
import { verifyToken } from "../utils/auth";

export const authenticateMiddleware: RequestHandler = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.status(401).json({ error: 'No token provided' });
        return;
    }

    const token = authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        res.status(401).json({ error: 'Invalid token format' });
        return;
    }

    const payload = verifyToken(token);

    if (!payload) {
        res.status(403).json({ error: 'Invalid or expired token' });
        return;
    }

    (req as any).user = payload;

    next();
}
