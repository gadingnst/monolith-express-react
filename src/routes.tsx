import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'

const pages = require('./app-bootstrap/toc.codegen')
const [notFound] = pages.filter((m: any) => m.route === '*')
const standardPages = pages.filter((m: any) => m !== notFound)

const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        {standardPages.map((page: any) => (
          <Route key={page.route} path={page.route} exact component={page.content} />
        ))}
        {notFound && <Route component={notFound.content} />}
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes
