import Express, { Application } from 'express'
import Routes from './routes'
import { PORT } from './utils/config'
import Cors from './utils/cors'

export default class Server {
  private application: Application
  private port: number|string

  constructor() {
    this.port = PORT
    this.application = Express()
  }
  
  private plugins() {
    this.application.use(Express.urlencoded({ extended: true }))
    this.application.use(Express.json())
    this.application.use(Cors())
    this.application.use(Routes)
  }
  
  public run() {
    try {
      this.plugins()
      this.application.listen(this.port, () => {
        console.log(`> Server running on http://localhost:${this.port}`)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}

new Server().run()
