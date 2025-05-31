import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/auth";

export function authenticateMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ error: 'Invalid token format' });
    }

    const payload = verifyToken(token);

    if (!payload) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }

    (req as any).User = payload;

    next();
}
