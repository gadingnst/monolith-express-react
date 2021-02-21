import Dotenv from 'dotenv'

Dotenv.config()

export const {
  NODE_ENV = 'production',
  PORT = 3000
} = process.env

export const IS_PRODUCTION = NODE_ENV === 'production'
export const CLIENT_BUILD_PATH = `${__dirname}/../../build`
