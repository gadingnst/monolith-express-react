import { Fragment, FunctionComponent } from 'react'
import { API_BASEURL } from '../utils/config'

export const route = '/about'

console.log({ API_BASEURL })

const Page: FunctionComponent = () => (
  <Fragment>
    <h1>About Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum, mollitia assumenda laborum magnam rem animi
      sequi consectetur a dolore quo unde vel corrupti minima commodi. Dignissimos fuga atque beatae.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum, mollitia assumenda laborum magnam rem animi
      sequi consectetur a dolore quo unde vel corrupti minima commodi. Dignissimos fuga atque beatae.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum, mollitia assumenda laborum magnam rem animi
      sequi consectetur a dolore quo unde vel corrupti minima commodi. Dignissimos fuga atque beatae.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum, mollitia assumenda laborum magnam rem animi
      sequi consectetur a dolore quo unde vel corrupti minima commodi. Dignissimos fuga atque beatae.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum, mollitia assumenda laborum magnam rem animi
      sequi consectetur a dolore quo unde vel corrupti minima commodi. Dignissimos fuga atque beatae.
    </p>
  </Fragment>
);

export default Page