import Express, { Application } from 'express'
import Routes from './routes'

export default class Server {
  private application: Application
  private port: number | string

  constructor() {
    this.port = process.env.PORT || 3000
    this.application = Express()
  }
  
  private plugins() {
    this.application.use(Express.urlencoded({ extended: true }))
    this.application.use(Express.json())
  }
  
  private routes() {
    this.application.use(Routes)
  }
  
  public async run() {
    try {
      this.plugins()
      this.routes()
      this.application.listen(this.port, () => {
        console.log(`> Server running on http://localhost:${this.port}`)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}

const server = new Server()
server.run()
