import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
    exp: number;
}

export const getTokenExpiration = (token: string): Date | null => {
  try {
    const decoded: TokenPayload = jwtDecode<TokenPayload>(token);

    if (decoded.exp) {
      return new Date(decoded.exp * 1000);
    }

    return null;
  } catch (error) {
    console.error("invalid token", error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {

    const expirationDate = getTokenExpiration(token);

    if (expirationDate && expirationDate.getTime() < new Date().getTime()) {
        console.log("Token Expired");
        return true;
    } else {
        console.log("Valid Token")
        return false;
    }

}