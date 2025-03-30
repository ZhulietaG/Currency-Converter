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
