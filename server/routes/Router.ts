import { Router } from 'express'

abstract class BaseRouter {
  public router: Router
  
  constructor() {
    this.router = Router()
    this.routes()
  }
  
  protected abstract routes(): void
}

export default BaseRouter
