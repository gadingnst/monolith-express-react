import Path from 'path'
import Express from 'express'
import Router from './Router'
import ApiRoute from './Api'
import { IS_PRODUCTION, CLIENT_BUILD_PATH } from '../utils/config'

class Routes extends Router {
  public baseRoute = '/'

  public routes() {
    this.router.use(ApiRoute.baseRoute, ApiRoute.router)
    if (IS_PRODUCTION) {
      this.router.use(Express.static(CLIENT_BUILD_PATH))
      this.router.use('*', (_, res) => {
        res.status(404).sendFile(Path.resolve(CLIENT_BUILD_PATH, 'index.html'))
      })
    }
  }
}

export default new Routes().router