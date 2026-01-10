import User from "../models/user.models";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import {generateAccessToken, generateRefreshToken} from "../utils/token";

export const Register = async (req : Request, res : Response) => {
    try {
        const {first_name, last_name, email, password} = req.body;

        if(!first_name && !email) {
            return res.status(400).json( {
                'success' : false,
                'message' : 'name and email is required'
            })
        }

        if(!password) {
            return res.status(400).json( {
                'success' : false,
                'message' : 'password is required'
            })
        }

        const SALT_ROUNDS = 10;
        const hashedPassword: string  = await bcrypt.hash(password, SALT_ROUNDS);
        
        const user = await User.create( {
            first_name,
            last_name,
            email,
            password : hashedPassword
        });
        const token = generateAccessToken({ userId: user.id });
        const Refreshtoken = generateRefreshToken({ userId: user.id });

        await user.updateOne( {
            refresh_token : Refreshtoken,
        });

        res.status(200).json( { 
            success : true,
            message : 'user created successfully',
            user : user,
            token : token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message : 'something went wrong',
            error
        })
    }
}


export const Login = async (req : Request, res : Response) => {
     try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "email and password are required",
            });
        }

       const user = await User.findOne({ email });
            if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = generateAccessToken({ userId: user.id });
        const Refreshtoken = generateRefreshToken({ userId: user.id });

        await user.updateOne( {
            refresh_token : Refreshtoken,
        });

        res.status(200).json( { 
            success : true,
            message : 'User Logged in Successfully',
            user : user,
            token : token
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message : 'something went wrong',
            error
        })
    }
}