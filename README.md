# Sistema de Gerenciamento de Pet Shop

Este é um sistema GUI de gerenciamento desenvolvido em TypeScript para pet shops. O sistema permite gerenciar clientes, pets, produtos, serviços e compras.

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/pedro-fs-garcia/atvi-pl-typescript.git
```

2. Instale as dependências:
```bash
npm install
```

3. Compile o projeto:
```bash
npm run build
```

## Como Usar

1. Inicie o sistema:
```bash
npm start
```

2. No menu principal, você terá as seguintes opções:

```
1 - Cadastros
2 - Listagens
3 - Atualizações
4 - Exclusões
5 - Relatórios
0 - Sair
```

3. Para cada item do menu principal, você itens em um menu secundário:
```
Opções de cadastro:
1 - Cadastrar cliente
2 - Cadastrar pet
3 - Cadastrar produto
4 - Cadastrar serviço
5 - Cadastrar compra
0 - Voltar
```

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


## Validações do Sistema

O sistema inclui várias validações para garantir a integridade dos dados:

- **Clientes**
  - Nome não pode ser vazio
  - CPF deve ter 11 dígitos

- **Pets**
  - Nome não pode ser vazio
  - Raça não pode ser vazia
  - Gênero deve ser "Macho" ou "Fêmea / "m" ou "f"

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
```

## Estrutura do Projeto

```
src/
├── app/           # Arquivo principal da aplicação
├── io/            # Classe de entrada/saída
├── modelo/        # Classes de modelo (Cliente, Pet, Produto, etc.)
├── negocio/       # Classes de negócio (Cadastro, Listagem, etc.)
└── testes/        # Arquivos de teste
```