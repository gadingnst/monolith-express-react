import { Fragment, FunctionComponent } from 'react'
import mardiana from '../assets/mardiana.jpeg'

export const route = '/'

const Page: FunctionComponent = () => (
  <Fragment>
    <h1>Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum, mollitia assumenda laborum magnam rem animi
      sequi consectetur a dolore quo unde vel corrupti minima commodi. Dignissimos fuga atque beatae.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum, mollitia assumenda laborum magnam rem animi
      sequi consectetur a dolore quo unde vel corrupti minima commodi. Dignissimos fuga atque beatae.
    </p>
    <img src={mardiana} alt="Lovely Girlfriend" width={256} />
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
)

export default Page