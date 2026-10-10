# Beach Club — Sistema de Reservas de Quadras

## Sobre o projeto

O Beach Club é um sistema desenvolvido em JavaScript para gerenciar reservas de quadras esportivas. O projeto utiliza classes e módulos para organizar o cadastro de clientes, quadras e reservas.

## Funcionalidades

- Cadastro de quadras esportivas.
- Cadastro de clientes.
- Criação de reservas com cliente, quadra, data e horário.
- Verificação da disponibilidade das quadras.
- Prevenção de reservas duplicadas para a mesma quadra, data e horário.
- Cancelamento de reservas.
- Listagem das reservas que não foram canceladas.
- Validação de dados obrigatórios.
- Testes automatizados com Jest.

## Tecnologias utilizadas

- JavaScript (ES Modules).
- Node.js.
- Jest para testes automatizados.
- npm para gerenciamento de dependências.

## Estrutura do projeto

text
Beach-club/
├── src/
│   ├── app.js
│   ├── cliente.js
│   ├── quadra.js
│   └── reserva.js
├── test/
│   ├── app.test.js
│   ├── quadra.test.js
│   └── reserva.test.js
├── package.json
├── package-lock.json
└── README.md

## Como instalar e executar os testes

**1. Pré-requisitos**

Tenha o Node.js e o npm instalados no computador.

**2. Instalar as dependências**

No terminal, dentro da pasta do projeto, execute:

npm install

**3. Executar os testes**

npm test

Os testes verificam o funcionamento do cadastro, das reservas, do cancelamento e da disponibilidade das quadras.

## Organização do código

- `quadra.js`: contém a classe `Quadra` e os dados das quadras.
- `cliente.js`: contém a classe `Cliente` e os dados dos clientes.
- `reserva.js`: contém a classe `Reserva`, incluindo o cancelamento e a exibição dos dados.
- `app.js`: reúne as funções de cadastro, criação de reservas, cancelamento e verificação de disponibilidade.
- `test/`: contém os testes automatizados do sistema.

## Resultado dos testes

Na última execução, todos os testes passaram:

- Suítes aprovadas: 3 de 3.
- Testes aprovados: 10 de 10.

## Integrantes

Miguel e Ronaldo

## Objetivo acadêmico

Este projeto foi desenvolvido para praticar conceitos de JavaScript, programação orientada a objetos, organização de código em módulos, validação de dados e testes automatizados.
