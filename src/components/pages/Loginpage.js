import React, { useState, useContext } from 'react'
import Navbar from '../constitutive/Navbar'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { setToken } from '../services/localStorageService'
import { AuthContext } from '../context/AuthContextProvider'
function LoginPage() {
  const history = useHistory()

  const { setIsAuthenticated } = useContext(AuthContext)

  function handleOnInputChange(event) {
    setInput((previousInput) => ({
      ...previousInput,
      [event.target.name]: event.target.value
    }))
    console.log(input)
  }

  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const handleOnLogin = async () => {
    try {
      await axios.post('/users/login', input).then((res) => {
        setToken(res.data.token)
        setIsAuthenticated(true)

        history.push('/')
      })
    } catch (err) {
      console.log(err)
      console.dir(err)
    }
  }

  return (
    <div>
      <Navbar />
      <div style={{marginTop:'70px'}}>
        <div className="centerlogo">
          <img
            src="https://res.cloudinary.com/dpacp5tew/image/upload/v1620976747/Blue_Distance_Learning_Clean_Informative_Education_Logo-removebg-preview_j0uffv.png"
            alt="logo"
          />
        </div>
        <div className="logininput">
          <h1 className="headertext">Log in</h1>
          <input
            className="whiteinput"
            style={{ width: '400px' }}
            type="email"
            placeholder="Email"
            onChange={(e) => handleOnInputChange(e)}
            name="email"
          ></input>
          <input
            className="whiteinput"
            onChange={(e) => handleOnInputChange(e)}
            style={{ width: '400px' }}
            type="password"
            placeholder="Password"
            name="password"
          ></input>
           <button
          className="greenbutton"
          type="button"
          onClick={handleOnLogin}
          style={{ height: '60px' }}
        >
          Login
        </button>
        </div>
       
      </div>
    </div>
  )
}

export default LoginPage
