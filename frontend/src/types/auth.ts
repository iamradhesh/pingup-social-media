export interface signupData {
    name: string;
    email: string;
    password: string;
}

export interface signinData {
    email: string;
    password: string;
}



export interface authSuccessResponse {
    message: string;
    token?: string;
    user?: {
        _id: string;
        name: string;
        email: string;
        profilePic?: string;
        bio?: string;
    };
}
export interface AuthErrorResponse {
    message: string;
}