class Database {
    init(conexao) {
        console.log("Tabelas criadas!");
        this.conexao = conexao;

        this.criarDenuncias();
        this.criarCidadao();
    }

    criarDenuncias() {
        const sql = `CREATE TABLE IF NOT EXISTS Denuncias (id int NOT NULL AUTO_INCREMENT, 
                    cidadao varchar(50) NOT NULL, 
                    cpf varchar(11) NOT NULL,
                    telefone varchar(11) NOT NULL,
                    rua varchar(50) NOT NULL,
                    bairro varchar(50) NOT NULL,
                    status varchar(20) NOT NULL, PRIMARY KEY(id))`

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            }else {
                console.log("Tabelas Denuncias Criada com sucesso");
            }
        })

    }
    criarCidadao() {
        const sql = `CREATE TABLE IF NOT EXISTS cidadao (id int NOT NULL AUTO_INCREMENT, 
                    nome varchar(50) NOT NULL, 
                    cpf varchar(11) NOT NULL,
                    telefone varchar(11) NOT NULL, PRIMARY KEY(id))`

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro);
            }else {
                console.log("Tabelas Cidadao Criada com sucesso");
            }
        })

    }
}

module.exports = new Database;