import { Request, Response } from 'express'
import { db } from '../db/db'

interface  User {
  cpf?: string;
  name: string;
  apiToken: string;
  password?: string;
}

class LoginController {

  constructor () {
  }

  login = async (req: Request, res: Response) => {   
    const data = db.users.find(data => data.cpf == req.body.cpf && data.password == req.body.password) as User
    console.log('login request', Date.now(), data) 
    if(data)  {
      var clone = Object.assign({}, data);
      delete clone.cpf;
      delete clone.password;
      res.status(200).json(clone);
    }
    else res.status(401).json(data);
  };
}

export default LoginController