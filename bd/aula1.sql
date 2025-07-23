CREATE DATABASE db_teste;

USE db_quitanda;

CREATE TABLE td_produtos (
    id BIGINT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    quantidade INT,
    datavalidade DATE,
    preco DECIMAL NOT NULL,
    PRIMARY KEY (id)
);

SELECT 
    *
FROM
    td_produtos;
    
    INSERT INTO td_produtos
    (nome,quantidade, datavalidade, preco) VALUES
    ("Morango", 50, '2025-07-22',7780.840);
 
    
SELECT 
    nome, preco
FROM
    td_produtos;
    
SELECT 
    *
FROM
    td_produtos
WHERE
    nome = 'Tomate';
    

SELECT 
    *
FROM
    td_produtos
WHERE
    preco <> 7;
   
   
SELECT 
    *
FROM
    td_produtos
WHERE
    preco >= 4 AND nome = 'Batata';

-- ------------------------------------------------------------------------------------- --

ALTER TABLE td_produtos MODIFY preco DECIMAL(6,2);

ALTER TABLE td_produtos ADD descricao VARCHAR(255);

ALTER TABLE td_produtos DROP descricao;

ALTER TABLE td_produtos CHANGE nome nome_produto VARCHAR(255);

-- ------------------------------------------------------------------------- --
SELECT 
    *
FROM
    td_produtos;
    
UPDATE td_produtos SET preco = 2.99 WHERE id = 6;

DELETE FROM td_produtos WHERE id = 2;


















