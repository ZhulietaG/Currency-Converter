export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    isActive: boolean;
}

export type CreateUser = {
    username: string;
    email: string;
    password: string;
    isActive: boolean;
}

export type Wallet = {
    id: number;
    amount: number;
    currency: string;
}

export type CreateWallet = {
    amount: number;
    currency: string;
}

export interface TokenPayload {
    id: string;
    username: string;
    exp: number;
}