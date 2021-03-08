import { FunctionComponent, Fragment, Suspense } from 'react'

const Layout: FunctionComponent = ({ children }) => (
  <Fragment>
    <Suspense fallback={<b>Loading ...</b>}>
      {children}
    </Suspense>
  </Fragment>
)

export default Layout