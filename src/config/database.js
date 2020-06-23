class Database {
	init(conexao) {
		console.log("Tabelas criadas!");
		this.conexao = conexao;

		this.criarDenuncias();
		this.criarUsuario();
		this.criarVisitas();
		this.criarAtividades();
		this.criarTipoVisita();
		this.criarMunicipio();
		this.criarPendencia();
		this.criarTipoRecipiente();
		this.criarRecipiente();
		this.criarSituacaoRecipiente();
		this.criarTratQuimico();
		this.criarLarvas();
		this.criarLaboratorio();


		//  this.popularTipoVisita();
		//  this.popularAtividades();
		//  this.popularMunicipios();
		//  this.popularPendencia();
		//  this.popularRecipientes();
		//  this.popularTipoRecipientes();
		//  this.popularSituacaoRecipientes();
		//  this.popularTratQuimico();
		//  this.popularLarvas();

		//  this.relacionarTabelaAgente();
		//  this.relacionarTabelaAtividades();
		//  this.relacionarTabelaLaboratorio();
		//  this.relacionarTabelaLarvas();
		//  this.relacionarTabelaMunicipio();
		//  this.relacionarTabelaPendencia();
		//  this.relacionarTabelaRecipientes();
		//  this.relacionarTabelaSituacaoRecipientes();
		//  this.relacionarTabelaTipoRecipientes();
		//  this.relacionarTabelaTipoVisita();
		//	this.relacionarTabelaTratQuimico();
	}

	criarDenuncias() {
		const sql = `CREATE TABLE IF NOT EXISTS denuncias (id int NOT NULL AUTO_INCREMENT, 
                    cidadao varchar(50) NOT NULL, 
                    cpf varchar(11) NOT NULL,
                    telefone varchar(11) NOT NULL,
                    rua varchar(50) NOT NULL,
                    bairro varchar(50) NOT NULL,
					imagem varchar(200),
					nomeImagem varchar(35),
                    observacoes text,
                    status varchar(20) NOT NULL, PRIMARY KEY(id))`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Denuncias Criada com sucesso");
			}
		})

	}

	criarUsuario() {
		const sql = `CREATE TABLE IF NOT EXISTS usuario (id int NOT NULL AUTO_INCREMENT, 
                    nome varchar(50) NOT NULL, 
                    cpf varchar(11) NOT NULL,
                    telefone varchar(11) NOT NULL,
                    email VARCHAR(40) NOT NULL,
					senha VARCHAR(40) NOT NULL,
					nivelAcesso VARCHAR(40) NOT NULL, PRIMARY KEY(id))`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Funcionario Criada com sucesso");
			}
		})
	}

	criarVisitas() {
		const sql = `CREATE TABLE IF NOT EXISTS visita (
            codVisita INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            idAgente INT,
            codAtividade INT NOT NULL,
            codTipoVisita INT NOT NULL,
            codMunicipio INT NOT NULL,
            municipio VARCHAR(35) NOT NULL,
            area INT NOT NULL,
            setorCensitario INT NOT NULL,
            quarteirao INT NOT NULL,
            execucao VARCHAR(20) NOT NULL,
            dataVisita DATETIME NOT NULL,
            numCadOrdem INT NOT NULL,
            endereco VARCHAR(100) NOT NULL,
            numComplemento VARCHAR(50) NOT NULL,
			Trabalhado VARCHAR(4),
			codPendencia VARCHAR(2),
            codTipoRecipientes VARCHAR(2),
			codSituacaoRecipientes INT,
			codRecipiente INT,
            contrMecanico VARCHAR(4),
            codTratQuimico INT,
            amostra VARCHAR(4),
            codLarvas INT,
            progRetorno VARCHAR(4) NOT NULL,
            codLaboratorio INT
            )`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Visita Criada com sucesso");
			}
		})

	}
	criarAtividades() {
		const sql = `CREATE TABLE IF NOT EXISTS atividades(
					codAtividade INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
					atividade VARCHAR(40) NOT NULL,
                    obs VARCHAR(40)
                    )`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Atividades Criada com sucesso");
			}
		})

	}
	criarTipoVisita() {
		const sql = `CREATE TABLE IF NOT EXISTS tipoVisita(
					codTipoVisita INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
					tipoVisita VARCHAR(40) NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas TipoVisita Criada com sucesso");
			}
		})

	}
	criarMunicipio() {
		const sql = `CREATE TABLE IF NOT EXISTS municipio(
					codMunicipio INT NOT NULL PRIMARY KEY,
					municipio VARCHAR(40) NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Municipio Criada com sucesso");
			}
		})

	}
	criarPendencia() {
		const sql = `CREATE TABLE IF NOT EXISTS pendencia(
					codPendencia VARCHAR(2) NOT NULL PRIMARY KEY,
					pendencia VARCHAR(40) NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Pendencia Criada com sucesso");
			}
		})

	}
	criarTipoRecipiente() {
		const sql = `CREATE TABLE IF NOT EXISTS tipoRecipientes(
					codTipoRecipientes VARCHAR(2) NOT NULL PRIMARY KEY,
					tipoRecipiente VARCHAR(30) NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas TipoRecipiente Criada com sucesso");
			}
		})

	}
	criarRecipiente() {
		const sql = `CREATE TABLE IF NOT EXISTS recipientes(
					codRecipiente INT NOT NULL PRIMARY KEY,
					recipiente VARCHAR(60) NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Recipiente Criada com sucesso");
			}
		})

	}
	criarSituacaoRecipiente() {
		const sql = `CREATE TABLE IF NOT EXISTS situacaoRecipientes(
					codSituacaoRecipiente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
					situacaoRecipiente VARCHAR(60) NOT NULL,
					quantidade INT NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas SituacaoRecipiente Criada com sucesso");
			}
		})

	}
	criarTratQuimico() {
		const sql = `CREATE TABLE IF NOT EXISTS tratamentoQuimico(
					codTratQuimico INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
					tratamentoQuimico VARCHAR(60) NOT NULL,
					confirmacao TINYINT(1) NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas TratQuimico Criada com sucesso");
			}
		})

	}
	criarLarvas() {
		const sql = `CREATE TABLE IF NOT EXISTS larvas(
					codLarvas INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
					tiposLarvas VARCHAR(60) NOT NULL,
					confirmacao TINYINT(1) NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Larvas Criada com sucesso");
			}
		})
	}
	criarLaboratorio() {
		const sql = `CREATE TABLE IF NOT EXISTS laboratorio(
					codLaboratorio INT NOT NULL PRIMARY KEY,
					laboratorio VARCHAR(40) NOT NULL,
					responsavel VARCHAR(40) NOT NULL,
					dataLab DATETIME NOT NULL
					)`

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Laboratorio Criada com sucesso");
			}
		})

	}
	popularTipoVisita() {
		const sql = `INSERT INTO tipoVisita(tipoVisita) VALUES ?`;
		const values = [
			['ROTINA'],
			['PENDÊNCIA'],
			['DEMANDA']
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela TipoVisita populada com sucesso");
			}
		})

	}
	popularAtividades() {
		const sql = `INSERT INTO atividades(atividade, obs) VALUES ?`;
		const values = [
			['PONTO ESTRATÉGICO', null],
			['PESO DE ARMADILHAS', null],
			['DELIMITAÇÃO DE FOCO', null],
			['BLOQUEIO – CONTR. CRIAD.', null],
			['BLOQUEIO – NEBULIZAÇÃO', null],
			['ARRASTÃO', null],
			['IMÓVEIS ESPECIAS', null],
			['CRIAD. ESPECIFICOS', null],
			['CASA A CASA – ROTINA', null],
			['CASA A CASA – INTENSIFICAÇÃO', null],
			['OUTROS', null],
			['ADL', null]
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela Atividades populada com sucesso");
			}
		})

	}

	popularMunicipios() {
		const sql = `INSERT INTO municipio(codMunicipio, municipio) VALUES ?`;
		const values = [
			[3500105, 'Adamantina'],
			[3500204, 'Adolfo'],
			[3500303, 'Aguaí'],
			[3500402, 'Águas da Prata'],
			[3500501, 'Águas de Lindóia'],
			[3500550, 'Águas de Santa Bárbara'],
			[3500600, 'Águas de São Pedro'],
			[3500709, 'Agudos'],
			[3500758, 'Alambari'],
			[3500808, 'Alfredo Marcondes'],
			[3500907, 'Altair'],
			[3501004, 'Altinópolis'],
			[3501103, 'Alto Alegre'],
			[3501152, 'Alumínio'],
			[3501202, 'Álvares Florence'],
			[3501301, 'Álvares Machado'],
			[3501400, 'Álvaro de Carvalho'],
			[3501509, 'Alvinlândia'],
			[3501608, 'Americana'],
			[3501707, 'Américo Brasiliense'],
			[3501806, 'Américo de Campos'],
			[3501905, 'Amparo'],
			[3502002, 'Analândia'],
			[3502101, 'Andradina'],
			[3502200, 'Angatuba'],
			[3502309, 'Anhembi'],
			[3502408, 'Anhumas'],
			[3502507, 'Aparecida'],
			[3502606, 'Aparecida d´Oeste'],
			[3502705, 'Apiaí'],
			[3502754, 'Araçariguama'],
			[3502804, 'Araçatuba'],
			[3502903, 'Araçoiaba da Serra'],
			[3503000, 'Aramina'],
			[3503109, 'Arandu'],
			[3503158, 'Arapeí'],
			[3503208, 'Araraquara'],
			[3503307, 'Araras'],
			[3503356, 'Arco-Íris'],
			[3503406, 'Arealva'],
			[3503505, 'Areias'],
			[3503604, 'Areiópolis'],
			[3503703, 'Ariranha'],
			[3503802, 'Artur Nogueira'],
			[3503901, 'Arujá'],
			[3503950, 'Aspásia'],
			[3504008, 'Assis'],
			[3504107, 'Atibaia'],
			[3504206, 'Auriflama'],
			[3504305, 'Avaí'],
			[3504404, 'Avanhandava'],
			[3504503, 'Avaré'],
			[3504602, 'Bady Bassitt'],
			[3504701, 'Balbinos'],
			[3504800, 'Bálsamo'],
			[3504909, 'Bananal'],
			[3505005, 'Barão de Antonina'],
			[3505104, 'Barbosa'],
			[3505203, 'Bariri'],
			[3505302, 'Barra Bonita'],
			[3505351, 'Barra do Chapéu'],
			[3505401, 'Barra do Turvo'],
			[3505500, 'Barretos'],
			[3505609, 'Barrinha'],
			[3505708, 'Barueri'],
			[3505807, 'Bastos'],
			[3505906, 'Batatais'],
			[3506003, 'Bauru'],
			[3506102, 'Bebedouro'],
			[3506201, 'Bento de Abreu'],
			[3506300, 'Bernardino de Campos'],
			[3506359, 'Bertioga'],
			[3506409, 'Bilac'],
			[3506508, 'Birigui'],
			[3506607, 'Biritiba Mirim'],
			[3506706, 'Boa Esperança do Sul'],
			[3506805, 'Bocaina'],
			[3506904, 'Bofete'],
			[3507001, 'Boituva'],
			[3507100, 'Bom Jesus dos Perdões'],
			[3507159, 'Bom Sucesso de Itararé'],
			[3507209, 'Borá'],
			[3507308, 'Boracéia'],
			[3507407, 'Borborema'],
			[3507456, 'Borebi'],
			[3507506, 'Botucatu'],
			[3507605, 'Bragança Paulista'],
			[3507704, 'Braúna'],
			[3507753, 'Brejo Alegre'],
			[3507803, 'Brodowski'],
			[3507902, 'Brotas'],
			[3508009, 'Buri'],
			[3508108, 'Buritama'],
			[3508207, 'Buritizal'],
			[3508306, 'Cabrália Paulista'],
			[3508405, 'Cabreúva'],
			[3508504, 'Caçapava'],
			[3508603, 'Cachoeira Paulista'],
			[3508702, 'Caconde'],
			[3508801, 'Cafelândia'],
			[3508900, 'Caiabu'],
			[3509007, 'Caieiras'],
			[3509106, 'Caiuá'],
			[3509205, 'Cajamar'],
			[3509254, 'Cajati'],
			[3509304, 'Cajobi'],
			[3509403, 'Cajuru'],
			[3509452, 'Campina do Monte Alegre'],
			[3509502, 'Campinas'],
			[3509601, 'Campo Limpo Paulista'],
			[3509809, 'Campos Novos Paulista'],
			[3509700, 'Campos do Jordão'],
			[3509908, 'Cananéia'],
			[3509957, 'Canas'],
			[3510005, 'Cândido Mota'],
			[3510104, 'Cândido Rodrigues'],
			[3510153, 'Canitar'],
			[3510203, 'Capão Bonito'],
			[3510302, 'Capela do Alto'],
			[3510401, 'Capivari'],
			[3510500, 'Caraguatatuba'],
			[3510609, 'Carapicuíba'],
			[3510708, 'Cardoso'],
			[3510807, 'Casa Branca'],
			[3510906, 'Cássia dos Coqueiros'],
			[3511003, 'Castilho'],
			[3511102, 'Catanduva'],
			[3511201, 'Catiguá'],
			[3511300, 'Cedral'],
			[3511409, 'Cerqueira César'],
			[3511508, 'Cerquilho'],
			[3511607, 'Cesário Lange'],
			[3511706, 'Charqueada'],
			[3557204, 'Chavantes'],
			[3511904, 'Clementina'],
			[3512001, 'Colina'],
			[3512100, 'Colômbia'],
			[3512209, 'Conchal'],
			[3512308, 'Conchas'],
			[3512407, 'Cordeirópolis'],
			[3512506, 'Coroados'],
			[3512605, 'Coronel Macedo'],
			[3512704, 'Corumbataí'],
			[3512803, 'Cosmópolis'],
			[3512902, 'Cosmorama'],
			[3513009, 'Cotia'],
			[3513108, 'Cravinhos'],
			[3513207, 'Cristais Paulista'],
			[3513306, 'Cruzália'],
			[3513405, 'Cruzeiro'],
			[3513504, 'Cubatão'],
			[3513603, 'Cunha'],
			[3513702, 'Descalvado'],
			[3513801, 'Diadema'],
			[3513850, 'Dirce Reis'],
			[3513900, 'Divinolândia'],
			[3514007, 'Dobrada'],
			[3514106, 'Dois Córregos'],
			[3514205, 'Dolcinópolis'],
			[3514304, 'Dourado'],
			[3514403, 'Dracena'],
			[3514502, 'Duartina'],
			[3514601, 'Dumont'],
			[3514700, 'Echaporã'],
			[3514809, 'Eldorado'],
			[3514908, 'Elias Fausto'],
			[3514924, 'Elisiário'],
			[3514957, 'Embaúba'],
			[3515004, 'Embu das Artes'],
			[3515103, 'Embu-Guaçu'],
			[3515129, 'Emilianópolis'],
			[3515152, 'Engenheiro Coelho'],
			[3515186, 'Espírito Santo do Pinhal'],
			[3515194, 'Espírito Santo do Turvo'],
			[3557303, 'Estiva Gerbi'],
			[3515202, 'Estrela d´Oeste'],
			[3515301, 'Estrela do Norte'],
			[3515350, 'Euclides da Cunha Paulista'],
			[3515400, 'Fartura'],
			[3515608, 'Fernando Prestes'],
			[3515509, 'Fernandópolis'],
			[3515657, 'Fernão'],
			[3515707, 'Ferraz de Vasconcelos'],
			[3515806, 'Flora Rica'],
			[3515905, 'Floreal'],
			[3516002, 'Flórida Paulista'],
			[3516101, 'Florínea'],
			[3516200, 'Franca'],
			[3516309, 'Francisco Morato'],
			[3516408, 'Franco da Rocha'],
			[3516507, 'Gabriel Monteiro'],
			[3516606, 'Gália'],
			[3516705, 'Garça'],
			[3516804, 'Gastão Vidigal'],
			[3516853, 'Gavião Peixoto'],
			[3516903, 'General Salgado'],
			[3517000, 'Getulina'],
			[3517109, 'Glicério'],
			[3517208, 'Guaiçara'],
			[3517307, 'Guaimbê'],
			[3517406, 'Guaíra'],
			[3517505, 'Guapiaçu'],
			[3517604, 'Guapiara'],
			[3517703, 'Guará'],
			[3517802, 'Guaraçaí'],
			[3517901, 'Guaraci'],
			[3518008, 'Guarani d´Oeste'],
			[3518107, 'Guarantã'],
			[3518206, 'Guararapes'],
			[3518305, 'Guararema'],
			[3518404, 'Guaratinguetá'],
			[3518503, 'Guareí'],
			[3518602, 'Guariba'],
			[3518701, 'Guarujá'],
			[3518800, 'Guarulhos'],
			[3518859, 'Guatapará'],
			[3518909, 'Guzolândia'],
			[3519006, 'Herculândia'],
			[3519055, 'Holambra'],
			[3519071, 'Hortolândia'],
			[3519105, 'Iacanga'],
			[3519204, 'Iacri'],
			[3519253, 'Iaras'],
			[3519303, 'Ibaté'],
			[3519402, 'Ibirá'],
			[3519501, 'Ibirarema'],
			[3519600, 'Ibtinga'],
			[3519709, 'Ibiúna'],
			[3519808, 'Icém'],
			[3519907, 'Iepê'],
			[3520004, 'Igaraçu do Tietê'],
			[3520103, 'Igarapava'],
			[3520202, 'Igaratá'],
			[3520301, 'Iguape'],
			[3520426, 'Ilha Comprida'],
			[3520442, 'Ilha Solteira'],
			[3520400, 'Ilhabela'],
			[3520509, 'Indaiatuba'],
			[3520608, 'Indiana'],
			[3520707, 'Indiaporã'],
			[3520806, 'Inúbia Paulista'],
			[3520905, 'Ipaussu'],
			[3521002, 'Iperó'],
			[3521101, 'Ipeúna'],
			[3521150, 'Ipiguá'],
			[3521200, 'Iporanga'],
			[3521309, 'Ipuã'],
			[3521408, 'Iracemápolis'],
			[3521507, 'Irapuã'],
			[3521606, 'Irapuru'],
			[3521705, 'Itaberá'],
			[3521804, 'Itaí'],
			[3521903, 'Itajobi'],
			[3522000, 'Itaju'],
			[3522109, 'Itanhaém'],
			[3522158, 'Itaoca'],
			[3522208, 'Itapecerica da Serra'],
			[3522307, 'Itapetininga'],
			[3522406, 'Itapeva'],
			[3522505, 'Itapevi'],
			[3522604, 'Itapira'],
			[3522653, 'Itapirapuã Paulista'],
			[3522703, 'Itápolis'],
			[3522802, 'Itaporanga'],
			[3522901, 'Itapuí'],
			[3523008, 'Itapura'],
			[3523107, 'Itaquaquecetuba'],
			[3523206, 'Itararé'],
			[3523305, 'Itariri'],
			[3523404, 'Itatiba'],
			[3523503, 'Itatinga'],
			[3523602, 'Itirapina'],
			[3523701, 'Itirapuã'],
			[3523800, 'Itobi'],
			[3523909, 'Itu'],
			[3524006, 'Itupeva'],
			[3524105, 'Ituverava'],
			[3524204, 'Jaborandi'],
			[3524303, 'Jaboticabal'],
			[3524402, 'Jacareí'],
			[3524501, 'Jaci'],
			[3524600, 'Jacupiranga'],
			[3524709, 'Jaguariúna'],
			[3524808, 'Jales'],
			[3524907, 'Jambeiro'],
			[3525003, 'Jandira'],
			[3525102, 'Jardinópolis'],
			[3525201, 'Jarinu'],
			[3525300, 'Jaú'],
			[3525409, 'Jeriquara'],
			[3525508, 'Joanópolis'],
			[3525607, 'João Ramalho'],
			[3525706, 'José Bonifácio'],
			[3525805, 'Júlio Mesquita'],
			[3525854, 'Jumirim'],
			[3525904, 'Jundiaí'],
			[3526001, 'Junqueirópolis'],
			[3526100, 'Juquiá'],
			[3526209, 'Juquitiba'],
			[3526308, 'Lagoinha'],
			[3526407, 'Laranjal Paulista'],
			[3526506, 'Lavínia'],
			[3526605, 'Lavrinhas'],
			[3526704, 'Leme'],
			[3526803, 'Lençóis Paulista'],
			[3526902, 'Limeira'],
			[3527009, 'Lindóia'],
			[3527108, 'Lins'],
			[3527207, 'Lorena'],
			[3527256, 'Lourdes'],
			[3527306, 'Louveira'],
			[3527405, 'Lucélia'],
			[3527504, 'Lucianópolis'],
			[3527603, 'Luís Antônio'],
			[3527702, 'Luiziânia'],
			[3527801, 'Lupércio'],
			[3527900, 'Lutécia'],
			[3528007, 'Macatuba'],
			[3528106, 'Macaubal'],
			[3528205, 'Macedônia'],
			[3528304, 'Magda'],
			[3528403, 'Mairinque'],
			[3528502, 'Mairiporã'],
			[3528601, 'Manduri'],
			[3528700, 'Marabá Paulista'],
			[3528809, 'Maracaí'],
			[3528858, 'Marapoama'],
			[3528908, 'Mariápolis'],
			[3529005, 'Marília'],
			[3529104, 'Marinópolis'],
			[3529203, 'Martinópolis'],
			[3529302, 'Matão'],
			[3529401, 'Mauá'],
			[3529500, 'Mendonça'],
			[3529609, 'Meridiano'],
			[3529658, 'Mesópolis'],
			[3529708, 'Miguelópolis'],
			[3529807, 'Mineiros do Tietê'],
			[3530003, 'Mira Estrela'],
			[3529906, 'Miracatu'],
			[3530102, 'Mirandópolis'],
			[3530201, 'Mirante do Paranapanema'],
			[3530300, 'Mirassol'],
			[3530409, 'Mirassolândia'],
			[3530508, 'Mococa'],
			[3530706, 'Mogi Guaçu'],
			[3530805, 'Mogi Mirim'],
			[3530607, 'Mogi das Cruzes'],
			[3530904, 'Mombuca'],
			[3531001, 'Monções'],
			[3531100, 'Mongaguá'],
			[3531209, 'Monte Alegre do Sul'],
			[3531308, 'Monte Alto'],
			[3531407, 'Monte Aprazível'],
			[3531506, 'Monte Azul Paulista'],
			[3531605, 'Monte Castelo'],
			[3531803, 'Monte Mor'],
			[3531704, 'Monteiro Lobato'],
			[3531902, 'Morro Agudo'],
			[3532009, 'Morungaba'],
			[3532058, 'Motuca'],
			[3532108, 'Murutinga do Sul'],
			[3532157, 'Nantes'],
			[3532207, 'Narandiba'],
			[3532306, 'Natividade da Serra'],
			[3532405, 'Nazaré Paulista'],
			[3532504, 'Neves Paulista'],
			[3532603, 'Nhandeara'],
			[3532702, 'Nipoã'],
			[3532801, 'Nova Aliança'],
			[3532827, 'Nova Campina'],
			[3532843, 'Nova Canaã Paulista'],
			[3532868, 'Nova Castilho'],
			[3532900, 'Nova Europa'],
			[3533007, 'Nova Granada'],
			[3533106, 'Nova Guataporanga'],
			[3533205, 'Nova Independência'],
			[3533304, 'Nova Luzitânia'],
			[3533403, 'Nova Odessa'],
			[3533254, 'Novais'],
			[3533502, 'Novo Horizonte'],
			[3533601, 'Nuporanga'],
			[3533700, 'Ocauçu'],
			[3533809, 'Óleo'],
			[3533908, 'Olímpia'],
			[3534005, 'Onda Verde'],
			[3534104, 'Oriente'],
			[3534203, 'Orindiúva'],
			[3534302, 'Orlândia'],
			[3534401, 'Osasco'],
			[3534500, 'Oscar Bressane'],
			[3534609, 'Osvaldo Cruz'],
			[3534708, 'Ourinhos'],
			[3534807, 'Ouro Verde'],
			[3534757, 'Ouroeste'],
			[3534906, 'Pacaembu'],
			[3535002, 'Palestina'],
			[3535101, 'Palmares Paulista'],
			[3535200, 'Palmeira d´Oeste'],
			[3535309, 'Palmital'],
			[3535408, 'Panorama'],
			[3535507, 'Paraguaçu Paulista'],
			[3535606, 'Paraibuna'],
			[3535705, 'Paraíso'],
			[3535804, 'Paranapanema'],
			[3535903, 'Paranapuã'],
			[3536000, 'Parapuã'],
			[3536109, 'Pardinho'],
			[3536208, 'Pariquera-Açu'],
			[3536257, 'Parisi'],
			[3536307, 'Patrocínio Paulista'],
			[3536406, 'Paulicéia'],
			[3536505, 'Paulínia'],
			[3536570, 'Paulistânia'],
			[3536604, 'Paulo de Faria'],
			[3536703, 'Pederneiras'],
			[3536802, 'Pedra Bela'],
			[3536901, 'Pedranópolis'],
			[3537008, 'Pedregulho'],
			[3537107, 'Pedreira'],
			[3537156, 'Pedrinhas Paulista'],
			[3537206, 'Pedro de Toledo'],
			[3537305, 'Penápolis'],
			[3537404, 'Pereira Barreto'],
			[3537503, 'Pereiras'],
			[3537602, 'Peruíbe'],
			[3537701, 'Piacatu'],
			[3537800, 'Piedade'],
			[3537909, 'Pilar do Sul'],
			[3538006, 'Pindamonhangaba'],
			[3538105, 'Pindorama'],
			[3538204, 'Pinhalzinho'],
			[3538303, 'Piquerobi'],
			[3538501, 'Piquete'],
			[3538600, 'Piracaia'],
			[3538709, 'Piracicaba'],
			[3538808, 'Piraju'],
			[3538907, 'Pirajuí'],
			[3539004, 'Pirangi'],
			[3539103, 'Pirapora do Bom Jesus'],
			[3539202, 'Pirapozinho'],
			[3539301, 'Pirassununga'],
			[3539400, 'Piratininga'],
			[3539509, 'Pitangueiras'],
			[3539608, 'Planalto'],
			[3539707, 'Platina'],
			[3539806, 'Poá'],
			[3539905, 'Poloni'],
			[3540002, 'Pompéia'],
			[3540101, 'Pongaí'],
			[3540200, 'Pontal'],
			[3540259, 'Pontalinda'],
			[3540309, 'Pontes Gestal'],
			[3540408, 'Populina'],
			[3540507, 'Porangaba'],
			[3540606, 'Porto Feliz'],
			[3540705, 'Porto Ferreira'],
			[3540754, 'Potim'],
			[3540804, 'Potirendaba'],
			[3540853, 'Pracinha'],
			[3540903, 'Pradópolis'],
			[3541000, 'Praia Grande'],
			[3541059, 'Pratânia'],
			[3541109, 'Presidente Alves'],
			[3541208, 'Presidente Bernardes'],
			[3541307, 'Presidente Epitácio'],
			[3541406, 'Presidente Prudente'],
			[3541505, 'Presidente Venceslau'],
			[3541604, 'Promissão'],
			[3541653, 'Quadra'],
			[3541703, 'Quatá'],
			[3541802, 'Queiroz'],
			[3541901, 'Queluz'],
			[3542008, 'Quintana'],
			[3542107, 'Rafard'],
			[3542206, 'Rancharia'],
			[3542305, 'Redenção da Serra'],
			[3542404, 'Regente Feijó'],
			[3542503, 'Reginópolis'],
			[3542602, 'Registro'],
			[3542701, 'Restinga'],
			[3542800, 'Ribeira'],
			[3542909, 'Ribeirão Bonito'],
			[3543006, 'Ribeirão Branco'],
			[3543105, 'Ribeirão Corrente'],
			[3543253, 'Ribeirão Grande'],
			[3543303, 'Ribeirão Pires'],
			[3543402, 'Ribeirão Preto'],
			[3543204, 'Ribeirão do Sul'],
			[3543238, 'Ribeirão dos Índios'],
			[3543600, 'Rifaina'],
			[3543709, 'Rincão'],
			[3543808, 'Rinópolis'],
			[3543907, 'Rio Claro'],
			[3544103, 'Rio Grande da Serra'],
			[3544004, 'Rio das Pedras'],
			[3544202, 'Riolândia'],
			[3543501, 'Riversul'],
			[3544251, 'Rosana'],
			[3544301, 'Roseira'],
			[3544400, 'Rubiácea'],
			[3544509, 'Rubinéia'],
			[3544608, 'Sabino'],
			[3544707, 'Sagres'],
			[3544806, 'Sales'],
			[3544905, 'Sales Oliveira'],
			[3545001, 'Salesópolis'],
			[3545100, 'Salmourão'],
			[3545159, 'Saltinho'],
			[3545209, 'Salto'],
			[3545407, 'Salto Grande'],
			[3545308, 'Salto de Pirapora'],
			[3545506, 'Sandovalina'],
			[3545605, 'Santa Adélia'],
			[3545704, 'Santa Albertina'],
			[3545803, 'Santa Bárbara d´Oeste'],
			[3546009, 'Santa Branca'],
			[3546108, 'Santa Clara d´Oeste'],
			[3546207, 'Santa Cruz da Conceição'],
			[3546256, 'Santa Cruz da Esperança'],
			[3546306, 'Santa Cruz das Palmeiras'],
			[3546405, 'Santa Cruz do Rio Pardo'],
			[3546504, 'Santa Ernestina'],
			[3546603, 'Santa Fé do Sul'],
			[3546702, 'Santa Gertrudes'],
			[3546801, 'Santa Isabel'],
			[3546900, 'Santa Lúcia'],
			[3547007, 'Santa Maria da Serra'],
			[3547106, 'Santa Mercedes'],
			[3547403, 'Santa Rita d´Oeste'],
			[3547502, 'Santa Rita do Passa Quatro'],
			[3547601, 'Santa Rosa de Viterbo'],
			[3547650, 'Santa Salete'],
			[3547205, 'Santana da Ponte Pensa'],
			[3547304, 'Santana de Parnaíba'],
			[3547700, 'Santo Anastácio'],
			[3547809, 'Santo André'],
			[3547908, 'Santo Antônio da Alegria'],
			[3548005, 'Santo Antônio de Posse'],
			[3548054, 'Santo Antônio do Aracanguá'],
			[3548104, 'Santo Antônio do Jardim'],
			[3548203, 'Santo Antônio do Pinhal'],
			[3548302, 'Santo Expedito'],
			[3548401, 'Santópolis do Aguapeí'],
			[3548500, 'Santos'],
			[3548609, 'São Bento do Sapucaí'],
			[3548708, 'São Bernardo do Campo'],
			[3548807, 'São Caetano do Sul'],
			[3548906, 'São Carlos'],
			[3549003, 'São Francisco'],
			[3549102, 'São João da Boa Vista'],
			[3549201, 'São João das Duas Pontes'],
			[3549250, 'São João de Iracema'],
			[3549300, 'São João do Pau d´Alho'],
			[3549409, 'São Joaquim da Barra'],
			[3549508, 'São José da Bela Vista'],
			[3549607, 'São José do Barreiro'],
			[3549706, 'São José do Rio Pardo'],
			[3549805, 'São José do Rio Preto'],
			[3549904, 'São José dos Campos'],
			[3549953, 'São Lourenço da Serra'],
			[3550001, 'São Luiz do Paraitinga'],
			[3550100, 'São Manuel'],
			[3550209, 'São Miguel Arcanjo'],
			[3550308, 'São Paulo'],
			[3550407, 'São Pedro'],
			[3550506, 'São Pedro do Turvo'],
			[3550605, 'São Roque'],
			[3550704, 'São Sebastião'],
			[3550803, 'São Sebastião da Grama'],
			[3550902, 'São Simão'],
			[3551009, 'São Vicente'],
			[3551108, 'Sarapuí'],
			[3551207, 'Sarutaiá'],
			[3551306, 'Sebastianópolis do Sul'],
			[3551405, 'Serra Azul'],
			[3551603, 'Serra Negra'],
			[3551504, 'Serrana'],
			[3551702, 'Sertãozinho'],
			[3551801, 'Sete Barras'],
			[3551900, 'Severínia'],
			[3552007, 'Silveiras'],
			[3552106, 'Socorro'],
			[3552205, 'Sorocaba'],
			[3552304, 'Sud Mennucci'],
			[3552403, 'Sumaré'],
			[3552551, 'Suzanápolis'],
			[3552502, 'Suzano'],
			[3552601, 'Tabapuã'],
			[3552700, 'Tabatinga'],
			[3552809, 'Taboão da Serra'],
			[3552908, 'Taciba'],
			[3553005, 'Taguaí'],
			[3553104, 'Taiaçu'],
			[3553203, 'Taiúva'],
			[3553302, 'Tambaú'],
			[3553401, 'Tanabi'],
			[3553500, 'Tapiraí'],
			[3553609, 'Tapiratiba'],
			[3553658, 'Taquaral'],
			[3553708, 'Taquaritinga'],
			[3553807, 'Taquarituba'],
			[3553856, 'Taquarivaí'],
			[3553906, 'Tarabai'],
			[3553955, 'Tarumã'],
			[3554003, 'Tatuí'],
			[3554102, 'Taubaté'],
			[3554201, 'Tejupá'],
			[3554300, 'Teodoro Sampaio'],
			[3554409, 'Terra Roxa'],
			[3554508, 'Tietê'],
			[3554607, 'Timburi'],
			[3554656, 'Torre de Pedra'],
			[3554706, 'Torrinha'],
			[3554755, 'Trabiju'],
			[3554805, 'Tremembé'],
			[3554904, 'Três Fronteiras'],
			[3554953, 'Tuiuti'],
			[3555000, 'Tupã'],
			[3555109, 'Tupi Paulista'],
			[3555208, 'Turiúba'],
			[3555307, 'Turmalina'],
			[3555356, 'Ubarana'],
			[3555406, 'Ubatuba'],
			[3555505, 'Ubirajara'],
			[3555604, 'Uchoa'],
			[3555703, 'União Paulista'],
			[3555802, 'Urânia'],
			[3555901, 'Uru'],
			[3556008, 'Urupês'],
			[3556107, 'Valentim Gentil'],
			[3556206, 'Valinhos'],
			[3556305, 'Valparaíso'],
			[3556354, 'Vargem'],
			[3556453, 'Vargem Grande Paulista'],
			[3556404, 'Vargem Grande do Sul'],
			[3556503, 'Várzea Paulista'],
			[3556602, 'Vera Cruz'],
			[3556701, 'Vinhedo'],
			[3556800, 'Viradouro'],
			[3556909, 'Vista Alegre do Alto'],
			[3556958, 'Vitória Brasil'],
			[3557006, 'Votorantim'],
			[3557105, 'Votuporanga'],
			[3557154, 'Zacarias']
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela Municipio populada com sucesso");
			}
		})

	}
	popularPendencia() {
		const sql = `INSERT INTO pendencia(codPendencia, pendencia) VALUES ?`;
		const values = [
			['', ' '],
			['F', 'Fechado'],
			['D', 'Desocupado'],
			['T', 'Temporada'],
			['P', 'Parcial'],
			['R', 'Recusa']

		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela Pendencias populada com sucesso");
			}
		})

	}

	popularRecipientes() {
		const sql = `INSERT INTO recipientes(codRecipiente, recipiente) VALUES ?`;
		const values = [

			[0, 'Escolha um tipo'],
			[1, 'Ligado À Rede'],
			[2, 'Não Ligado A Rede'],
			[3, 'Ligado A Rede'],
			[4, 'Não Ligado A Rede'],
			[5, 'Vaso De Planta Na Água'],
			[6, 'Vasos De Planta (Diversos)'],
			[7, 'Prato / Pingadeira'],
			[8, 'Consumo Animal'],
			[9, 'Deposito P/ Construção'],
			[10, 'Depósito P/ Horticultura'],
			[11, 'Piscina Desmontável'],
			[12, 'Lata. Frasco. Plástico Utilizáveis'],
			[13, 'Garrafas Retornáveis'],
			[14, 'Balde / Regador'],
			[15, 'Bandeja Geladeira/Ar Cond.'],
			[16, 'Material De Construção'],
			[17, 'Outros'],
			[18, 'Ralo Interno'],
			[19, 'Talo Externo'],
			[20, 'Laje'],
			[21, 'Calha'],
			[22, 'Vaso Sanitário / Cx.Descarga'],
			[23, 'Piscina'],
			[24, 'Depósito P/ Construção'],
			[25, 'Depósito P/ Horticultura'],
			[26, 'Consumo Animal'],
			[27, 'Outros'],
			[28, 'Pneu'],
			[29, 'Outros Correlatos'],
			[30, 'Lata, Frasco, Plástico'],
			[31, 'Garrafa Descartável'],
			[32, 'Lona, Encerado, Plástico'],
			[33, 'Entulho De Construção'],
			[34, 'Peças / Sucatas'],
			[35, 'Masseira'],
			[36, 'Barco'],
			[37, 'Outros'],
			[38, 'Oco De Árvore E Bambu'],
			[39, 'Bromélias'],
			[40, 'Outros ']
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela Recipientes populada com sucesso");
			}
		})

	}
	popularTipoRecipientes() {
		const sql = `INSERT INTO tipoRecipientes(codTipoRecipientes, tipoRecipiente) VALUES ?`;
		const values = [
			['A', 'Depósito Elevado'],
			['B', 'Depósito Não Elevado'],
			['C', 'Móveis'],
			['D', 'Fixos'],
			['E', 'Pneus'],
			['F', 'Passíveis Remoção I Alteração'],
			['G', 'Naturais']
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela TipoRecipiente populada com sucesso");
			}
		})

	}
	popularSituacaoRecipientes() {
		const sql = `INSERT INTO SituacaoRecipientes(situacaoRecipiente, quantidade) VALUES ?`;
		const values = [
			['Existente', 0],
			['Com àgua', 0],
			['Com Larva', 0]
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela situacaoRecipiente populada com sucesso");
			}
		})

	}
	popularTratQuimico() {
		const sql = `INSERT INTO tratamentoQuimico (tratamentoQuimico, confirmacao) VALUES ?`;
		const values = [
			['PROD. ALTER.', 0],
			['FOCAL', 0],
			['PERIFOCAL', 0],
			['NEBULIZAÇÃO', 0]
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela Tratamento Quimico populada com sucesso");
			}
		})

	}
	popularLarvas() {
		const sql = `INSERT INTO larvas (tiposLarvas, confirmacao) VALUES ?`;
		const values = [
			['Exame', 0],
			['Ae Aegypti', 0],
			['Ae Albopictus', 0]
		];

		this.conexao.query(sql, [values], (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabela Larvas populada com sucesso");
			}
		})

	}
	
	relacionarTabelaAgente() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_usuario FOREIGN KEY (idAgente) REFERENCES usuario (id)`;

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Agente relacionada com sucesso");
			}
		})

	}
	relacionarTabelaAtividades() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_atividades FOREIGN KEY (codAtividade) REFERENCES atividades (codAtividade)`;

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Atividades relacionada com sucesso");
			}
		})

	}
	relacionarTabelaTipoVisita() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_tipoVisita FOREIGN KEY (codTipoVisita) REFERENCES tipoVisita (codTipoVisita)`;

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas TipoVisita relacionada com sucesso");
			}
		})

	}

	relacionarTabelaMunicipio() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_municipio FOREIGN KEY (codMunicipio) REFERENCES municipio (codMunicipio)`;


		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Municipio relacionada com sucesso");
			}
		})

	}

	relacionarTabelaPendencia() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_pendencia FOREIGN KEY (codPendencia) REFERENCES pendencia (codPendencia)`;


		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Pendencia relacionada com sucesso");
			}
		})

	}
	relacionarTabelaTipoRecipientes() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_tipoRecipientes FOREIGN KEY (codTipoRecipientes) REFERENCES tipoRecipientes (codTipoRecipientes)`;


		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas TipoRecipiente relacionada com sucesso");
			}
		})

	}

	relacionarTabelaSituacaoRecipientes() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_situacaoRecipientes FOREIGN KEY (codSituacaoRecipientes) REFERENCES situacaoRecipientes (codSituacaoRecipiente)`;


		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas SituacaoRecipiente relacionada com sucesso");
			}
		})

	}

	relacionarTabelaRecipientes() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_recipientes FOREIGN KEY (codRecipiente) REFERENCES recipientes (codRecipiente)`;

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Recipientes relacionada com sucesso");
			}
		})

	}

	relacionarTabelaTratQuimico() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_tratQuimico FOREIGN KEY (codTratQuimico) REFERENCES tratamentoQuimico (codTratQuimico)`;

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas TratQuimico relacionada com sucesso");
			}
		})

	}

	relacionarTabelaLarvas() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_larvas FOREIGN KEY (codLarvas) REFERENCES larvas (codLarvas)`;

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Larvas relacionada com sucesso");
			}
		})

	}

	relacionarTabelaLaboratorio() {
		const sql = `ALTER TABLE visita ADD CONSTRAINT fk_laboratorio FOREIGN KEY (codLaboratorio) REFERENCES laboratorio (codLaboratorio)`;

		this.conexao.query(sql, (erro) => {
			if (erro) {
				console.log(erro);
			} else {
				console.log("Tabelas Laboratorio relacionada com sucesso");
			}
		})

	}

}

module.exports = new Database;