import Dotenv from 'dotenv'

Dotenv.config()

export const {
  NODE_ENV
} = process.env

export const IS_PRODUCTION = NODE_ENV !== 'development'
export const CLIENT_BUILD_PATH = `${__dirname}/../../build`

console.log({ CLIENT_BUILD_PATH })