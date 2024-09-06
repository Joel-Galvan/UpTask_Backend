import { transporter } from "../config/nodemailer"

interface IEmail {
    email: string,
    name: string,
    token: string
}

export class AuthEmail {
    static sendConfirmationEmail = async (user: IEmail) => {
        await transporter.sendMail({
            from: 'UpTask <admin@uptask.com>',
            to: user.email,
            subject: 'Uptask - confirma tu cuenta',
            text: 'Uptask - confirma tu cuenta',
            html: `
                <div style="font-family: Arial, sans-serif; background-color: rgb(31, 41, 55); color: white; padding: 20px; border-radius: 10px;">
                    <div style="background-color: rgb(217, 70, 239); color: white; padding: 10px; border-radius: 5px; text-align: center; font-size: 24px; margin-bottom: 20px;">
                        Hola ${user.name}
                    </div>
                    
                    <p>Has creado tu cuenta en UpTask. ¡Ya casi está todo listo! Solo debes confirmar tu cuenta.</p>
                    
                    <p style="margin-bottom: 20px;">Visita el siguiente enlace:</p>
                    
                    <a href="${process.env.FRONTEND_URL}/auth/confirm-account" style="display: inline-block; padding: 10px 20px; color: rgb(217, 70, 239); background-color: transparent; text-decoration: none; border: 2px solid rgb(217, 70, 239); border-radius: 5px; margin-bottom: 20px;">Confirmar cuenta</a>
                    
                    <p>Ingresa el código:</p>
                    <p style="font-size: 18px; font-weight: bold; color: rgb(217, 70, 239);">${user.token}</p>
                    <p style="font-size: 12px; color: white;">Este token expira en 10 minutos.</p>
                </div>
            `
        })


        // await transporter.sendMail({
        //     from: 'UpTask <admin@uptask.com>',
        //     to: user.email,
        //     subject: 'Uptask - confirma tu cuenta',
        //     text: 'Uptask - confirma tu cuenta',
        //     html: `<p>Hola: ${user.name}, has creado tu cuenta en UpTask, ya casi 
        //     esta todo listo, solo debes confirmar tu cueta</p>
        //         <p>Visita el siguiente enlace:</p>
        //         <a href="">Confirmar cuenta</a>
        //         <p>E ingresa el codigo: <b>${user.token}</b></p>
        //         <p>Este token expira en 10 minutos</p>
        //     `
        // })
    }

    static sendPasswordResetToken = async (user: IEmail) => {
        await transporter.sendMail({
            from: 'UpTask <admin@uptask.com>',
            to: user.email,
            subject: 'Uptask - Restablece tu cuenta',
            text: 'Uptask - Restablece tu cuenta',
            html: `
                <div style="font-family: Arial, sans-serif; background-color: rgb(31, 41, 55); color: white; padding: 20px; border-radius: 10px;">
                    <div style="background-color: rgb(217, 70, 239); color: white; padding: 10px; border-radius: 5px; text-align: center; font-size: 24px; margin-bottom: 20px;">
                        Hola ${user.name}
                    </div>
                    
                    <p>Has solicitado restablecer tu password.</p>
                    
                    <p style="margin-bottom: 20px;">Visita el siguiente enlace:</p>
                    
                    <a href="${process.env.FRONTEND_URL}/auth/new-password" style="display: inline-block; padding: 10px 20px; color: rgb(217, 70, 239); background-color: transparent; text-decoration: none; border: 2px solid rgb(217, 70, 239); border-radius: 5px; margin-bottom: 20px;"
                    >Restablecer Password</a>
                    
                    <p>Ingresa el código:</p>
                    <p style="font-size: 18px; font-weight: bold; color: rgb(217, 70, 239);">${user.token}</p>
                    <p style="font-size: 12px; color: white;">Este token expira en 10 minutos.</p>
                </div>
            `
        })
    }
}