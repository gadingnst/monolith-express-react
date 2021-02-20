import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import { API_BASEURL } from './utils/config'

function App() {
  useEffect(() => {
    console.log({ API_BASEURL })
    window.fetch(`${API_BASEURL}/voucher`)
      .then(response => response.json())
      .then(data => {
        console.log({ data })
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
