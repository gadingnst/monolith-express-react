import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Error404 from './components/404'

import Home from './pages/Home'
import About from './pages/About'

const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes