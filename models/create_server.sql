-- CREATE DATABASE zizi_imoveis;
-- USE zizi_imoveis;

CREATE TABLE apartamentos(
    id int(4) AUTO_INCREMENT,
    titulo varchar(60),
    descricao varchar(120) NOT NULL,
    comodidades varchar(120),
    endereco  varchar(60) NOT NULL,
    cep varchar(8) NOT NULL,
    num_quartos int(4),
    area int(4),
    num_garagem int(4),
    num_banheiro int(4),
    aluguel int(5),
    condominio int(5),
    iptu int(4),
    PRIMARY KEY (id)
);

CREATE TABLE casas(
    id int(4) AUTO_INCREMENT,
    titulo varchar(60),
    descricao varchar(120) NOT NULL,
    comodidades varchar(120),
    endereco  varchar(60) NOT NULL,
    cep varchar(8) NOT NULL,
    num_quartos int(4),
    area int(4),
    num_garagem int(4),
    num_banheiro int(4),
    aluguel int(5),
    condominio int(5),
    iptu int(4),
    PRIMARY KEY (id)
);

CREATE TABLE usuarios(
    cpf varchar(11) NOT NULL,
    nome varchar(60),
    telefone varchar(15),
    senha varchar(15),
    renda int(6),
    PRIMARY KEY (cpf)
);