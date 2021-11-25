import { Cep} from '../model/ceps'

interface IRepositoryConsultaFrete {
    findFaixaFrete(cep:number): Promise<Cep>
}

export { IRepositoryConsultaFrete }