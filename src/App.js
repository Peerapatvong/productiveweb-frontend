import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Loginpage from './components/pages/Loginpage'
import SignUpPage from './components/pages/SignUpPage'
import Bookconsultantpage from './components/pages/Bookconsultantpage'
import Editconsultantpage from './components/pages/Editconsultantpage'
import CartPage from './components/pages/CartPage'
import Paymentpage from './components/pages/Paymentpage'
import Adminpage from './components/pages/Adminpage'
import Allconsultantpage from './components/pages/Allconsultantpage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Loginpage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/bookconsultant" component={Bookconsultantpage} />
        <Route exact path="/editconsultant" component={Editconsultantpage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/payment" component={Paymentpage} />
        <Route exact path="/admin" component={Adminpage} />
        <Route exact path="/allconsultant" component={Allconsultantpage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
