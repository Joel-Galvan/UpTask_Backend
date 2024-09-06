import mongoose from "mongoose";
import { exit } from 'node:process';

import colors from 'colors';

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.magenta.bold(`MongoDB Conectado en: ${url}`));
    } catch (error) {
        // console.log(error.message);
        console.log(colors.red.bold('Error al Conectar a MongoDB'));
        
        exit(1)
    }
}