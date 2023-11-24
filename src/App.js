import logo from './logo.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import { useStateValue } from './StateProvider'
import Signup from './components/Signup'
import Home from './components/Home'
import Main from './components/Main'
import Renter from './components/Renter'
import Rider from './components/Rider'
import Rented from './components/Rented'

function App () {
  const [{ user }, dispatch] = useStateValue()
  return (
    //BEM naming convention
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
            {/* Login */}
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
            {/* SignUp */}
          </Route>
          <Route path='/main/:reg'>
            <Main></Main>
            {/* SignUp */}
          </Route>
          <Route path='/renter/:reg'>
            <Renter></Renter>
            {/* SignUp */}
          </Route>
          <Route path='/rider'>
            <Rider></Rider>
            {/* SignUp */}
          </Route>
          <Route path='/rented/:reg'>
            <Rented></Rented>
            {/* SignUp */}
          </Route>
        </Switch>
        {/* <Switch> */}

        {/* </Switch> */}
      </Router>
    </div>
  )
}

export default App
