import { FunctionComponent, Suspense } from 'react'
import { Link } from 'react-router-dom'

const Layout: FunctionComponent = ({ children }) => (
  <div>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/first">First</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
    <div>
      <Suspense fallback={<b>Loading ...</b>}>{children}</Suspense>
    </div>
  </div>
)

export default Layout