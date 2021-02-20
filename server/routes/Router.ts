import { Router, RequestHandler } from 'express'

export default abstract class {
  public router: Router
  
  constructor() {
    this.router = Router()
    this.routes()
  }
  
  protected abstract routes(): void
}
