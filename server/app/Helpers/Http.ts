import { Response } from 'express'

export interface HttpResponse<T> {
  code: number,
  message: string,
  error?: boolean,
  payload?: T
}

export default class Http {
  public static send<T>(res: Response, data: HttpResponse<T>): Response {
    return res.status(data.code).send({ error: false, ...data })
  }
}
