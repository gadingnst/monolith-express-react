import Cors from 'cors'

export const whiteListDomain = [
  'http://localhost',
  'http://localhost:3000',
  'http://localhost:5000',
  'http://localhost:8080'
]

export const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (!origin || whiteListDomain.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not Allowed to access the request!'))
    }
  }
}

const CorsInstance = (newOptions: any = {}) => Cors({ ...corsOptions, ...newOptions })

export default CorsInstance