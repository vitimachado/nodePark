import { Request, Response } from 'express'
import { db } from '../db/db'

class ExtractController {

  constructor () {
  }

  extract = async (req: Request, res: Response) => {  
    
    console.log('---- extracts', req.body)
    const user = await db.users.find(data => data.apiToken == req.body.token) 
    const data = db.extracts.find(data => {
      console.log('!!!data', data)
      return data.cpf == user?.cpf})
    console.log('extracts', req.body, data)
    if(data)  res.status(200).json(data);
    else res.status(401).json(data);
  };
}

export default ExtractController