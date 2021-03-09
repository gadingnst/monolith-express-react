import { Router } from 'express'

abstract class BaseRouter {
  public router: Router
  public abstract baseRoute: string
  
  constructor() {
    this.router = Router()
    this.routes()
  }
  
  protected abstract routes(): void
}

export default BaseRouter
