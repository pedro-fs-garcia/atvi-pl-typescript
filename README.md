# Sistema de Gerenciamento de Pet Shop e Clínica Veterinária

Este é um sistema de gerenciamento desenvolvido em TypeScript para pet shops e clínicas veterinárias. O sistema permite gerenciar clientes, pets, produtos, serviços e compras.

## Funcionalidades

- **Gestão de Clientes**
  - Cadastro de clientes
  - Listagem de clientes
  - Atualização de dados
  - Registro de consumo

- **Gestão de Pets**
  - Cadastro de pets
  - Listagem de pets
  - Associação com clientes

- **Gestão de Produtos**
  - Cadastro de produtos
  - Listagem de produtos
  - Atualização de produtos
  - Controle de estoque
  - Relatório de produtos mais vendidos

- **Gestão de Serviços**
  - Cadastro de serviços
  - Listagem de serviços
  - Atualização de serviços
  - Relatório de serviços mais utilizados

- **Gestão de Compras**
  - Registro de compras
  - Controle de estoque
  - Histórico de consumo

- **Relatórios**
  - Top 10 clientes que mais consumiram em quantidade
  - Top 5 clientes que mais gastaram
  - Produtos e serviços mais consumidos por raça e tipo de pet

## Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Compile o projeto:
```bash
npm run build
# ou
yarn build
```

## Como Usar

1. Inicie o sistema:
```bash
npm start
# ou
yarn start
```

2. No menu principal, você terá as seguintes opções:

```
1 - Cadastrar cliente
2 - Listar todos os clientes
3 - Atualizar dados do cliente
4 - Cadastrar novo pet
5 - Listar pets
6 - Listar 10 clientes que mais consumiram em quantidade
7 - Listar 5 clientes que mais consumiram em valor
8 - Cadastrar Produto
9 - Listar Produtos
10 - Atualizar Produtos
11 - Exibir produtos mais vendidos
12 - Cadastrar Serviço
13 - Listar Serviços
14 - Atualizar Serviços
15 - Exibir serviços mais vendidos
16 - Cadastrar nova compra
17 - Listar produtos e serviços mais consumidos por raça e tipo
18 - Executar testes de erros
0 - Sair
```

## Validações do Sistema

O sistema inclui várias validações para garantir a integridade dos dados:

- **Clientes**
  - Nome não pode ser vazio
  - CPF deve ter 11 dígitos

- **Pets**
  - Nome não pode ser vazio
  - Raça não pode ser vazia
  - Gênero deve ser "Macho" ou "Fêmea"

- **Produtos**
  - Nome não pode ser vazio
  - Preço não pode ser negativo
  - Quantidade em estoque não pode ser negativa
  - Não é possível comprar quantidade maior que o estoque

- **Serviços**
  - Nome não pode ser vazio
  - Preço não pode ser negativo

## Testes

O sistema inclui uma suíte de testes para verificar as validações e o funcionamento correto. Para executar os testes:

1. Use a opção 18 no menu principal
2. Ou execute diretamente:
```bash
npm run test
# ou
yarn test
```

## Estrutura do Projeto

```
src/
├── app/           # Arquivos principais da aplicação
├── io/            # Classes de entrada/saída
├── modelo/        # Classes de modelo (Cliente, Pet, Produto, etc.)
├── negocio/       # Classes de negócio (Cadastro, Listagem, etc.)
└── testes/        # Arquivos de teste
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 