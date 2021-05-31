import React, {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getToken, clearToken } from '../services/localStorageService'
import { useAuthContext } from '../context/AuthContextProvider'

import swal from 'sweetalert'

function Navbar() {
  const history = useHistory()

  const handlerSignup = () => history.push('/signup')
  const handlerlogin = () => history.push('/login')
  const handlerhomepage = () => history.push('/')

  useEffect(async () => {
    await getUser()
  }, [])

  // User Profile
  function handlerProfile() {
    // console.log(user)
    if (user) {
      history.push('/profile/' + user.id)
    }
  }

  const handlerlearnpage = () => {
    if (getToken()) {
      history.push('/learn/' + user.id)
    } else {
      swal("Can't access this Page", 'You have to Login/Register', 'error')
    }
  }
  //Log Out Fn
  const {
    isAuthenticated,
    setIsAuthenticated,
    getUser,
    user
  } = useAuthContext()

  const handlerSignOut = (e) => {
    e.preventDefault()
    // console.log('signOut')
    clearToken('token')
    setIsAuthenticated(false)
    console.log('setIs')
    history.push('/')
  }
  // console.log(getToken())
  // console.log(clearToken('token'))
  // console.log(isAuthenticated)

  // Fn check Pathname for Border-bottom
  const [pathName, setPathName] = useState(null)

  useEffect(() => {
    setPathName(window.location.pathname.split('/')[1])
  }, [])

  const styleLine = { borderBottom: '2px solid white' }
  const styleLineNone = { borderBottom: 'none' }

  // console.log(styleLine)
  // console.log(window.location.pathname)
  // console.log(window.location.pathname === '/profile')
  // console.log(window.location.pathname.split('/'))
  // console.log(window.location.pathname.split('/')[1])

  return (
    <div>
      <div className="header">
        <div className="logo" onClick={handlerhomepage}>
          <img
            src="https://res.cloudinary.com/dpacp5tew/image/upload/v1620976747/Blue_Distance_Learning_Clean_Informative_Education_Logo-removebg-preview_j0uffv.png"
            alt="logo"
            style={{ width: '85px', height: '30px' }}
          />
        </div>
        <button
          className="navbarheader"
          onClick={handlerlearnpage}
          style={pathName === 'learn' ? styleLine : styleLineNone}
        >
          Learn
        </button>
        <button
          className="navbarheader"
          onClick={handlerhomepage}
          style={pathName === '' ? styleLine : styleLineNone}
        >
          Course
        </button>
        <button
          className="navbarheader"
          onClick={handlerProfile}
          style={pathName === 'profile' ? styleLine : styleLineNone}
        >
          Profile
        </button>

        <div className="into">
          {isAuthenticated && (
            <a className="navbar-register" onClick={handlerSignOut}>
              Sign Out
            </a>
          )}
          {!isAuthenticated && (
            <>
              <a
                className="navbar-register"
                onClick={handlerSignup}
                style={pathName === 'signup' ? styleLine : styleLineNone}
              >
                Sign Up
              </a>
              <h3 className="navbar-register">|</h3>
              <a
                className="navbar-register"
                onClick={handlerlogin}
                style={pathName === 'login' ? styleLine : styleLineNone}
              >
                Login
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
