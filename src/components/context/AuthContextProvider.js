import { createContext } from 'react'
import { useState, useContext } from 'react'
import { getToken } from '../services/localStorageService'
import axios from '../../config/axios'
export const AuthContext = createContext()

function AuthContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
  const [isAuthenticated, setIsAuthenticated] = useState(getToken())
  const [user, setUser] = useState(null)

  async function getUser() {
    const respond = await axios.get('/users/me')
    // setUser({
    //   id: respond.data.data.id,
    //   status: respond.data.data.status
    // })
    console.log(respond.data.data)
    setUser(respond.data.data)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, getUser, user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must use under AuthContext')
  }
  return context
}
export { AuthContextProvider, useAuthContext }
