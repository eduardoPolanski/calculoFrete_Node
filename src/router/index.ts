import { CalcularFreteController } from "../controllers/CalcularFreteController"
import { Router } from "express"

const rota = Router()

const calcularFreteController = new CalcularFreteController

rota.get("/consultafrete", calcularFreteController.handle)

export { rota }