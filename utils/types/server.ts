export interface UserSession {
    user: {
        id: string;
        email: string;
        o_auth_provider: string;
        o_auth_id: string;
        full_name: string;
        avatar_url: string;
        status: string;
        role: string;
        token_reset_password: string;
        token_reset_password_expired_at: Date;
        created_at: Date;
        deleted_at: Date | null;
    }
}