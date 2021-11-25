🚀 Tecnologias

Express
NodeJs
TypeScript

▶️ Como Instalar e Rodar Projeto

Clone this repository
$ git clone https://github.com/eduardoPolanski/calculoFrete_Node.git

$ cd calculoFrete_Node

# Instalando Dependências

	$ npm install
	$ npm run dev 

# Manual

* Para consultar o valor e prazo de entrega usar a rota localhost:3559/consultafrete
* Em formato JSON informar cep e peso do produto como na imagem abaixo.

![public\img\exemplo.png](./public/img/exemplo.png)

* Se Cep estiver dentro das faixas de entrega o retorno será o valor do frete e o prazo de entrega.

![public\img\exemplo2.png](./public/img/exemplo2.png)

* Se o Cep estiver fora das faixas de entrega, o retorno será uma mensagem "Não atendemos esse CEP".

![public\img\exemplo3.png](./public/img/exemplo3.png)

* Documentação está na rota localhost:3559/api-docs

* Servidor rodando na porta 3559