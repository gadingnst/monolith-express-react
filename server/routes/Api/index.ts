import Router from '../Router'
import VoucherRoute from './Voucher'

class ApiRoute extends Router {
  public baseRoute = '/api'

  public routes() {
    this.router.use(VoucherRoute.baseRoute, VoucherRoute.router)
  }
}

export default new ApiRoute()
