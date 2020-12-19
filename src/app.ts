import express from 'express'
import cors from 'cors'
import Routes from './routes'
import bodyParser from 'body-parser'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  public middleware (): void {
    const corsOption = {
      origin: '*',
      optionsSuccessStatus: 200 
    }

    this.express.use(function(req, res, next) {
      //res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype');
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      // res.header("Access-Control-Allow-Origin", "*");    
      // res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
      // res.header('Access-Control-Allow-Headers', 'X-Requested-With,contenttype');
      // res.header('Access-Control-Allow-Credentials', 'false');
      next();
    });
    this.express.options('*', cors(corsOption)) 
    this.express.use(cors(corsOption))
    this.express.use(bodyParser.urlencoded({extended: true}));
    this.express.use(bodyParser.json())
  }

  public routes (): void {
    new Routes(this.express)
  }
}

export default new App().express
