import VoucherController from '../../app/Controllers/Voucher'
import Router from '../Router'

class VoucherRoute extends Router {
  public routes() {
    this.router.get('/', VoucherController.get)
    this.router.post('/', VoucherController.create)
  }
}

export default new VoucherRoute().router