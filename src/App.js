// import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import InfoCoursePage from './components/pages/InfoCoursePage'
import PaymentPage from './components/pages/PaymentPage'
import AdminPage from './components/pages/AdminPage'
import ProfilePage from './components/pages/ProfilePage'
import LearnPage from './components/pages/LearnPage'
import { useAuthContext } from './components/context/AuthContextProvider'

function App() {
  const { isAuthenticated } = useAuthContext()
  const privateRoute = [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/profile/:userId',
      component: ProfilePage
    },
    {
      path: '/infocourse/:courseId',
      component: InfoCoursePage
    },
    {
      path: '/payment/:courseId',
      component: PaymentPage
    },
    {
      path: '/admin',
      component: AdminPage
    },
  ]
  const publicRoute = [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/infocourse/:courseId',
      component: InfoCoursePage
    },
    {
      path: '/learn',
      component: LearnPage
    }
  ]
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/profile/:userId" component={ProfilePage} />
        <Route exact path="/infocourse/:courseId" component={InfoCoursePage} />
        <Route exact path="/payment/:courseId" component={PaymentPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/learn/:userId" component={LearnPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
