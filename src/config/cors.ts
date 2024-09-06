// import { CorsOptions } from "cors";

// export const corsConfig: CorsOptions = {
//     origin: function(origin, callback) {
//         const whitelist = [process.env.FRONTEND_URL]

//         if(process.argv[2] === '--api') {
//             whitelist.push(undefined)
//         }
//         if(whitelist.includes(origin)) {
//             callback(null, true)
//         } else {
//             callback(new Error('Error de CORS'))
//         }
//     }
// }
import { CorsOptions } from "cors"
export const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}