import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../constitutive/Navbar'
import { DatePicker, Select } from 'antd'
import axios from '../../config/axios'
import { setToken } from '../services/localStorageService'
import { useAuthContext } from '../context/AuthContextProvider'
import { useHistory, useParams } from 'react-router-dom'

function ProfilePage() {
  const [input, setInput] = useState({
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    phoneNumber: '',
    status: 'MEMBER'
  })
  const {
    isAuthenticated,
    setIsAuthenticated,
    getUser,
    user
  } = useAuthContext()
  // console?.log(user)

  const history = useHistory()

  const { userId } = useParams()

  useEffect(async () => {
    await setInput({
      firstName: user?.firstName,
      lastName: user?.lastName,
      birthdate: user?.birthdate,
      gender: user?.gender,
      phoneNumber: user?.phoneNumber,
      status: 'MEMBER'
    })
  }, [user])

  const handleSummitEdit = async (e) => {
    await axios.put('/users/edituser', input).then((res) => {
      history.push('/')
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
        <h1 className="headertext">Profile</h1>
        <div>
          <input
            className="whiteinput"
            style={{ width: '200px' }}
            // placeholder="Firstname"
            name="firstName"
            value={input.firstName}
            onChange={handleInputChange}
          ></input>
          <input
            className="whiteinput"
            style={{ width: '200px' }}
            placeholder="Lastname"
            name="lastName"
            value={input.lastName}
            onChange={handleInputChange}
          ></input>
        </div>

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
          value={input.phoneNumber}
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

        <button
          onClick={handleSummitEdit}
          className="greenbutton"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
