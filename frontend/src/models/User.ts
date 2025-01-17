export interface User {
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

export interface UserRegister extends User {
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}