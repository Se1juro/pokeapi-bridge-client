import jwt_decode from 'jwt-decode';

export const getDecodedAccessToken = (token: string) => {
  try {
    return jwt_decode(token);
  } catch (Error) {
    return null;
  }
};
