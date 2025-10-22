import type { AuthErrorResponse, authSuccessResponse, signinData, signupData } from "../types/auth";

const API_BASE_URL = import.meta.env.VITE_API_URL; // <-- use import.meta.env in Vite

// SignUp service
export const signupService = async (data: signupData): Promise<authSuccessResponse | AuthErrorResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result: authSuccessResponse | AuthErrorResponse = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Signup failed');
        }

        return result;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
    }
};

// SignIn service
export const signinService = async(data: signinData): Promise<authSuccessResponse | AuthErrorResponse> => {
   try {
     const response = await fetch(`${API_BASE_URL}/auth/signin`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result: authSuccessResponse | AuthErrorResponse = await response.json();
    if(!response.ok){
        throw new Error(result.message || 'Sign-in failed');
    }
    if('token' in result && result.token){
        localStorage.setItem('authToken', result.token);
    }
    return result;
   } catch (error) {
       if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unexpected error occurred');
   }
};
