import { Request, Response } from "express"
import { CalcularFreteService } from "../services/CalcularFreteService"

class CalcularFreteController {
    async handle(request: Request, response: Response) {
        const {cep, peso} = request.body

        const calcularFreteService = new CalcularFreteService(cep)

        const calculoFinal =  await calcularFreteService.execute({cep, peso})

        return response.json(calculoFinal)
    }
}

export { CalcularFreteController } 