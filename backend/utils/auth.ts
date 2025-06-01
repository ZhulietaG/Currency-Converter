import crypto from "crypto";
import {TokenPayload} from "../common/interface";

const SECRET = "b83d6b5fc4f5d4434013b39416d79900376";

function base64urlEncode(str: string) {
    return Buffer.from(str)
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

export const generateToken = (payload: TokenPayload): string => {
    const header = {
        alg: "HS256",
        typ: "JWT",
    };

    const base64Header = base64urlEncode(JSON.stringify(header));
    const base64Payload = base64urlEncode(JSON.stringify(payload));
    const data = `${base64Header}.${base64Payload}`;

    const signature = crypto
        .createHmac("sha256", SECRET)
        .update(data)
        .digest("base64")
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

    return `${data}.${signature}`;
}

export const verifyToken = (token: string): TokenPayload | null => {
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) return null;

    const data = `${header}.${payload}`;
    const expectedSignature = crypto
        .createHmac("sha256", SECRET)
        .update(data)
        .digest("base64")
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

    if (signature !== expectedSignature) {
        console.log('Invalid signature');
        return null;
    }

    const decodedPayload: TokenPayload = JSON.parse(
        Buffer.from(payload, 'base64').toString()
    );

    if (decodedPayload.exp < Date.now()) {
        console.log('Token expired');
        return null;
    }

    return decodedPayload;
}