import { IRepositoryConsultaFrete } from "../repositories/IRepositoryConsultaFrete";
import { RepositoryConsultaFrete } from "../repositories/RepositoryConsultaFrete";
import { AppErrors } from "../errors/AppError";

interface ICalcularFreteRequest {
    cep: number;
    peso: number;
}

class CalcularFreteService {
    constructor(
        private repositoryConsultaFrete: IRepositoryConsultaFrete
    ) {}
    async execute({cep,peso}: ICalcularFreteRequest) {

        this.repositoryConsultaFrete = new RepositoryConsultaFrete()
        const frete = await this.repositoryConsultaFrete.findFaixaFrete(cep) 
          if (frete) {
            const precoFinal = ((frete.gris * frete.preco) + (frete.advalorem * frete.preco) + (peso*0.005)).toFixed(2)
            const prazoEntrega = frete.prazo
            const calculoFinalFrete = {
                prazoEntrega,
                precoFinal
            }
            return calculoFinalFrete
          } else {
            throw new AppErrors(`não atendemos o CEP: ${cep}`)
          }
    }
}

export { CalcularFreteService }