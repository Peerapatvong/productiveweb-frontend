import React, { useState, useContext } from 'react'
import Navbar from '../constitutive/Navbar'
import { DatePicker, Menu, Dropdown, Select } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import axios from '../../config/axios'
import { setToken } from '../services/localStorageService'
import { AuthContext } from '../context/AuthContextProvider'
import { useHistory } from 'react-router-dom'
function SignUpPage() {
  const { setIsAuthenticated } = useContext(AuthContext)
  const history = useHistory()
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    phoneNumber: '',
    status: 'MEMBER'
  })

  const handleOnSignup = async (e) => {
    await axios.post('/users', input).then((res) => {
      setToken(res.data.token)
      setIsAuthenticated(true)

      history.push('/login')
    })
  }

  const { Option } = Select

  function handleChange(value) {
    console.log(`selected ${value}`)
    input.gender = value
    console.log(input)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({ ...prev, [name]: value }))
    console.log(input)
  }

  function handlerDate() {
    console.log(`click`)
  }
  function handleDateChange(event) {
    if (event) {
      const { _d } = event
      input.birthdate = _d.toString()
    }
  }
  return (
    <div>
      <Navbar />

      <div className="centerinput">
        <div>
          <input
            className="whiteinput"
            style={{ width: '200px' }}
            placeholder="Firstname"
            name="firstName"
            onChange={handleInputChange}
          ></input>
          <input
            className="whiteinput"
            style={{ width: '200px' }}
            placeholder="Lastname"
            name="lastName"
            onChange={handleInputChange}
          ></input>
        </div>

        <input
          className="whiteinput"
          style={{ width: '405px' }}
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        ></input>
        <input
          className="whiteinput"
          style={{ width: '405px' }}
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
        ></input>
        <input
          className="whiteinput"
          style={{ width: '405px' }}
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          onChange={handleInputChange}
        ></input>
        <input
          className="whiteinput"
          style={{ width: '405px' }}
          placeholder="Phonenumber"
          name="phoneNumber"
          onChange={handleInputChange}
        ></input>

        <div className="inlinediv" style={{ width: '405px' }}>
          <div
            style={{
              width: '49%'
            }}
          >
            <DatePicker
              className="picker"
              style={{
                color: '#a6a6a6',
                height: '40px',
                width: '100%',
                borderRadius: '15px',
                borderColor: '#a6a6a6',
                marginRight: ''
              }}
              placeholder="Birthdate"
              name="birthdate"
              onChange={(e) => handleDateChange(e)}
              onClick={(e) => handlerDate(e)}
            />
          </div>
          <div
            style={{
              width: '49%'
            }}
          >
            <Select
              defaultValue="Gender"
              name="Gender"
              style={{
                width: '100%',
                borderColor: '#a6a6a6',
                color: '#a6a6a6'
              }}
              onChange={handleChange}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </div>
        </div>

        <button onClick={handleOnSignup} className="greenbutton" type="button">
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignUpPage
