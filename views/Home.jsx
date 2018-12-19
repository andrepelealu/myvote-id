import React, { Component } from 'react'
import MyJumbotron from '../src/components/Jumbotron'

export default class Home extends Component {
  render() {
    return (
      <div>
        <MyJumbotron/>
        <h1>Home</h1>
      </div>
    )
  }
}
