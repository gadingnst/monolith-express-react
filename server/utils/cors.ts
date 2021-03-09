import Cors, { CorsOptions } from 'cors'
import { IS_PRODUCTION } from './config'

const productionWhiteList: string[] = []

const developmentWhiteList: string[] = [
  'http://localhost',
  'http://localhost:3000',
  'http://localhost:5000',
  'http://localhost:8080'
]

export const whiteListDomain = IS_PRODUCTION
  ? productionWhiteList
  : developmentWhiteList

export const corsOptions: CorsOptions = {
  origin: (origin?, callback?) => {
    if (!origin || whiteListDomain.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not Allowed to access the request!'))
    }
  }
}

const CorsInstance = (newOptions: CorsOptions = {}) =>
  Cors({ ...corsOptions, ...newOptions })

export default CorsInstance