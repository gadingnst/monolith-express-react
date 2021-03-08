import { FunctionComponent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './styles.scss'
import { API_BASEURL } from '../../utils/config'

const Home: FunctionComponent = () => {
  useEffect(() => {
    // make sure that ENV Variables works
    console.log({ API_BASEURL })
    window.fetch(`${API_BASEURL}/voucher`)
      .then(response => response.json())
      .then(data => {
        console.log({ data })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Home page.
        </p>
        <Link className="App-link" to="/about">
          Go To About
        </Link>
      </header>
    </div>
  )
}

export default Home
