import User from "../models/user.models";
import { Request, Response } from "express";

export const Register = async (req : Request, res : Response) => {
    try {
        const {first_name, last_name, email, password} = req.body;
        const user = await User.create( {
            first_name,
            last_name,
            email,
            password
        })

        res.status(200).json( {
            success : true,
            message : 'user created successfully',
            user : user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message : 'something went wrong',
            error
        })
    }
}