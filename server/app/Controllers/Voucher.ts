import { Request, Response } from 'express'
import Controller from './Controller'

class VoucherController extends Controller {
  // NOTE: Please use arrow function to avoid ambiguous of "this"

  public get = (req: Request, res: Response) => {
    // dummy data. only for demo
    const payload: any[] = [
      { id: 1, name: 'Indomie', price: 2100 },
      { id: 2, name: 'Roti', price: 3000 },
      { id: 3, name: 'Aqua', price: 500 },
      { id: 4, name: 'Telur', price: 2500 },
      this.test()
    ]
    try {
      this.send(res, {
        code: 200,
        message: `OK`,
        payload
      })
    } catch (err) {
      this.handleError(req, res, err)
    }
  }

  public create = (req: Request, res: Response) => {
    try {
      this.send(res, {
        code: 201,
        message: `Created`
      })
    } catch (err) {
      this.handleError(req, res, err)
    }
  }

  public testHandleHttpError = (req: Request, res: Response) => {
    try {
      // make sure throwing error with Http helper works
      this.setError(400, 'Bad Request')
    } catch (err) {
      this.handleError(req, res, err)
    }
  }

  private test = () => {
    return { id: 5, name: 'Beras', price: 9000 }
  }
}

export default new VoucherController()
