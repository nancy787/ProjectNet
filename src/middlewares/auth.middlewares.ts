import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import { Login } from "../controllers/user.controller";

interface AuthRequest extends Request {
    user? : JwtPayload
}

export const authMiddleware = ( req : AuthRequest, res : Response, next : NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if(!token) {
        return res.status(404).json( {
            'success' : false,
            'message' : 'unauthorized'
        })
    }
     try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload

        req.user = decoded;
        next()
        
    } catch (error) {
         return res.status(401).json({ message: "Invalid token" });
    }
}