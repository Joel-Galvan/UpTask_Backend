import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import User, { IUser } from "../models/User";

declare global {
    namespace Express {
        interface Request {
            user?: IUser
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    console.log();
    const beader = req.headers.authorization
    if (!beader) {
        const error = new Error('No Autorizado')
        return res.status(401).json({ error: error.message })
    }

    const [, token] = beader.split(' ')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (typeof decoded === 'object' && decoded.id) {
            const user = await User.findById(decoded.id).select('id name email')
            if (user) {
                req.user = user
                next()
            } else {
                res.status(500).json({ error: 'Token No Valido' })
            }
        }
    } catch (error) {
        res.status(500).json({ error: 'Token No Valido' })
    }
}