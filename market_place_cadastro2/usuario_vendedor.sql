CREATE DATABASE IF NOT EXISTS market_place;

USE market_place;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    nascimento DATE NOT NULL,
    contato VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    complemento VARCHAR(255),
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    preferencias_comunicacao VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS vendedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    banco VARCHAR(255) NOT NULL,
    agencia VARCHAR(20) NOT NULL,
    conta VARCHAR(20) NOT NULL,
    informacoes_fiscais VARCHAR(255) NOT NULL,
    informacoes_bancarias VARCHAR(255) NOT NULL
);

CREATE USER 'market_user'@'localhost' IDENTIFIED BY 'senha_segura';
GRANT ALL PRIVILEGES ON market_place.* TO 'market_user'@'localhost';
FLUSH PRIVILEGES;
