import jwt,{SignOptions} from "jsonwebtoken";

interface TokenPayload {
    userId : string
}

export const generateAccessToken = (payload: TokenPayload) => {
  const secret = process.env.JWT_SECRET 
  if(!secret) {
    throw new Error('secret is undefinded');
  }
  // let expiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRES_AT ?? '15m';
  const options:SignOptions = {expiresIn : '1h' }
  const token = jwt.sign(payload, secret, options)
  return token
};



export const generateRefreshToken = (payload: TokenPayload) => {
  const secret = process.env.JWT_SECRET 
  if(!secret) {
    throw new Error('secret is undefinded');
  }
  const options: SignOptions = {
      expiresIn: "7d",
      issuer: "taskprojectnet",
  };
  const token = jwt.sign(payload, secret, options)
  return token
};