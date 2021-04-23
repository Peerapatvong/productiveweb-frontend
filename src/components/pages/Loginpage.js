import React, { useState, useContext } from 'react'
import Navbar from '../constitutive/Navbar'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/AuthContextProvider'
function Loginpage() {
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
    await axios.post('/users/login', input).then((res) => {
      setIsAuthenticated(true)

      history.push('/allconsultant')
    })
  }

  return (
    <div>
      <Navbar />
      <div className="centerinput">
        <div className="centerlogo">
          <img src="https://picsum.photos/200" alt="logo" />
        </div>
        <div className="logininput">
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
        </div>
        <button className="greenbutton" type="button" onClick={handleOnLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Loginpage
