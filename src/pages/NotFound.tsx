import { Fragment, FunctionComponent } from 'react'

export const route = '*';

const Page: FunctionComponent = () => (
  <Fragment>
    <h1>Not Found Page</h1>
    <p>The requested page was not found.</p>
  </Fragment>
)

export default Page