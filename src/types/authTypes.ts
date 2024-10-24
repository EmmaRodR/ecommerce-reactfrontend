
export interface RegisterData {
    username: string;
    email: string;
    password: string;
    passwordVerify: string;
}

export interface LoginData {
    username: string;
    password: string;
}

export interface RegisterResponse {
    username: string,
    email: string,
    status: string,
    jwt: string,
    role: string,
}

export interface LoginResponse {
    username: string,
    email: string,
    status: string,
    jwt: string,
    role: string,
}


export interface ApiError {
    statusCode: string;
    msg: string;
    timeStamp: string; 
    }
