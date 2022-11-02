const express = require('express');
const cors = require('cors');
const dbConection = require('../database/config');
const { UsuarioRouter } = require('../routes/index');

class Server {
	constructor() {
		this.app = express();
		this.port = 3000;
		//Paths

		this.paths = {
			usuario: '/api/usuario',
		};

		//Conexion a DB
		this.conectarDB();

		// middlewares
		this.middlewares();

		//rutas
		this.router();
	}

	//conexion a dbs
	async conectarDB() {
		await dbConection();
	}
	middlewares() {
		// cors
		this.app.use(cors);
		// Lectura y parseo de body
		this.app.use(express.json);
	}

	router() {
		this.app.use(this.paths.usuario, UsuarioRouter);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`we are running in port ${this.port}`);
		});
	}
}

module.exports = Server;
