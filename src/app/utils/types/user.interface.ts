export interface Login { 
    email: string;
    password: string;
}

export interface Profile{
    id: number;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
    email_verified_at: Date;
}