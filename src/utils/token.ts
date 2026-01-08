import jwt from "jsonwebtoken";

interface TokenPayload {
    userId : number
}

export const generateAccessToken = (payload: TokenPayload): string => {
  const secret = process.env.JWT_ACCESS_SECRET 
  
  const expiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRES_AT
  
 return jwt.sign( payload, secret , {expiresIn})
};