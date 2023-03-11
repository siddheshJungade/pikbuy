import express from 'express'

import routes from './routes'


class App {
    public server: any;

    constructor() {
        this.server = express();
        this.midelware();
        this.routes();
    }

    midelware() {
       this.server.use(express.json()); 
    }
    routes() {
        this.server.use(routes)
    }
}

const server = new App().server
server.listen(3333)