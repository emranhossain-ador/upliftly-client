import { authClient } from "./auth-client";

export const GetTokenFromClient = async () => {
    const { data: jwtToken } = await authClient.token();
    return jwtToken?.token;
}