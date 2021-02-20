import Router from '../Router'
import VoucherRoute from './Voucher'

class ApiRoute extends Router {
  public routes() {
    this.router.use('/voucher', VoucherRoute)
  }
}

export default new ApiRoute().router
