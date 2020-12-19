import express from 'express'
import LoginController from './controller/login'
import ExtractController from './controller/extracts'

class Routes {

  base = '/api'
  
  public constructor (express: express.Application) {
    this.routes(express)
  }

  public routes (http: express.Application): void {
    const loginController = new LoginController()
    const extractController = new ExtractController()

    http.get('/*', (req, res) => {
      console.log('req', req.body)
      return res.send('Mocker Api')
    })
    console.log(`Endpoint Login: ${this.base}/login`)
    http.post(`${this.base}/login`, loginController.login)

    console.log(`Endpoint Extract: ${this.base}/extract`)
    http.post(`${this.base}/extract`, extractController.extract)
  }
}

export default Routes
