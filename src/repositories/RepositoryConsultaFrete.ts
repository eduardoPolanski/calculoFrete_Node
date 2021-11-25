import { Cep, data } from "../model/ceps";
import { IRepositoryConsultaFrete } from "./IRepositoryConsultaFrete";

class RepositoryConsultaFrete implements IRepositoryConsultaFrete {
    async findFaixaFrete(cep: number):Promise<Cep>{
        const consultaFaixaCep = data.find(c =>
            c.cepInicial <= cep &&
            c.cepFinal >= cep
          )
          return consultaFaixaCep
    }
}

export { RepositoryConsultaFrete }