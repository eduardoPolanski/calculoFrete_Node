import express, { NextFunction, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from "./swagger.json"
import "express-async-errors"
import { rota } from './router';
import { AppErrors } from './errors/AppError'
import cors from "cors"

const app = express()
app.use(cors())

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(rota)

//Tratar Erros
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof AppErrors) {
            return response.status(err.statusCode).json({
                message: err.message,
            })
        }
        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        })
    }
)  

app.listen(3559, () => console.log("server runnig http://localhost:3559"))