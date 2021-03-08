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
          This is Home page. <br />
          (For make sure the API works, please check browser log.)
        </p>
        <Link className="App-link" to="/about">
          Go To About
        </Link>
        <a className="App-Link" href={`${API_BASEURL}/voucher`} style={{ color: 'whitesmoke', marginTop: 10 }}>
          Check Deployed Dummy API
        </a>
      </header>
    </div>
  )
}

export default Home
