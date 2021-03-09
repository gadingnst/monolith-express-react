import VoucherController from '../../app/Controllers/Voucher'
import Router from '../Router'

class VoucherRoute extends Router {
  public baseRoute = '/voucher'

  public routes() {
    this.router.get('/', VoucherController.get)
    this.router.post('/', VoucherController.create)
    this.router.get('/demo-error', VoucherController.testHandleHttpError)
  }
}

export default new VoucherRoute()