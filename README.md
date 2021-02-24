# SiteImoveis

Este repositório contém uma uma aplicação Web que contem um formulário para cadastramento dos imóveis disponíveis para locação de uma imobiliária. Os dados dos imóveis são inseridos adequadamente nem um banco de dados.

O sistema considera dois tipos de imóveis: casa e apartamento. Para os imóveis da categoria casa, as seguintes informações são armazenadas: quantidade de quartos, quantidade de suítes, quantidade de salas de estar, número de vagas na garagem, área (em metros quadrados), se possui armário embutido e descrição (algum detalhe a mais que se deseja informar sobre a casa). Já para os imóveis da categoria apartamento, as seguintes informações são armazenadas: quantidade de quartos, quantidade de suítes, quantidade de salas de estar, quantidade de salas de jantar, número de vagas na garagem, área (em metros quadrados), se possui armário embutido, descrição (algum detalhe a mais que se deseja informar sobre o apartamento), andar, valor do condomínio e indicativo se o condomínio possui portaria 24 horas.

Para cada imóvel cadastrado no sistema é importante saber o seu endereço completo, sendo necessário cadastrar o bairro no qual o imóvel está localizado. O usuário deverá selecionar o bairro dentre uma lista de bairros disponíveis. Além disso, é obrigatório armazenar o valor de aluguel de cada imóvel. A aplicação permite o agendamento de visita no imóvel. Neste caso, ao clicar no botão ‘Agendar Visita’, a aplicação permite selecionar uma data no calendário. Para uma determinada data, o usuário deverá selecionar um horário disponível para visita e clicar em ‘Finalizar’.

# Requisitos

* Node js
* MySQL

# Instruções De instalação

* 1 passo - Baixar os arquivos em uma pasta de trabalho.
* 2 passo - Criar um banco de dados no MySQL chamado zizi_imoveis
* 3 passo - Executar o comando `npm intall`
* 4 passo - Abrir o arquivo /models/db.js e configurar a senha do banco de dados
`const sequelize = new Sequelize('zizi_imoveis','root','SUA_SENHA_ROOT', {host:"localhost",dialect:"mysql"});`
* 5 passo - Executar o comando `npm start`
* 6 passo - Abrir no navegador o link `http://localhost:21262/`

# Tecnologias utilizadas

* Node.js
* Exmpress
* Sequelize
* MySQL
* Handlebars
* Bootstrap
