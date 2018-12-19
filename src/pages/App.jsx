import React, { Component } from 'react'
import MyNavbar from '../components/Navbar'
import MyFooter from '../components/Footer'
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Vote from './Vote'
import AddCandidate from './AddCandidate'
import Transaction from './Transaction'
import NewNavbar from '../components/NewNavbar'

export default class App extends Component {
  render() {
    return (
      <div>
          <MyNavbar/>
          

          <div>
              <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/vote" component={Vote}/>
                <Route path="/addcandidate" component={AddCandidate}/>
                <Route path="/transaction" component={Transaction}/>
              </Switch>
          </div>

          <MyFooter/>
        
      </div>
    )
  }
}
