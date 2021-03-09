import { Request, Response } from 'express'

export default class HttpError extends Error {
  constructor(code: number, message: string) {
    super(JSON.stringify({ code, message, error: true }))
    Object.setPrototypeOf(this, this.constructor.prototype)
  }
  
  public static handle(req: Request, res: Response, err: Error): Response {
    if (err.message.includes('code')) {
      const error = JSON.parse(err.message)
      console.error(error)
      return res.status(error.code).send(error)
    }
    console.error(err)
    return res.status(500).send({
      code: 500,
      message: `Internal server error!`,
      error: true
    })
  }
}
