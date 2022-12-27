import jwtDecode from 'jwt-decode';
import { decodedToken,AuthData } from '../types';
// TODO: gérer l'expiration du token
const signIn = (token:string): Promise<AuthData> => {
  const decodedToken:decodedToken = jwtDecode(token);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: token,
        tokens: decodedToken?.tokens,
        firstName: decodedToken?.firstName!,
        lastName: decodedToken?.lastName,
        id: decodedToken?.id,
        email: decodedToken?.email,
        employee: decodedToken?.employee,
        status: decodedToken?.status,
        permissions: decodedToken?.permissions
      });
    }, 1000);
  });
};

export const authService = {
    signIn,
};
              


export { AuthData };

