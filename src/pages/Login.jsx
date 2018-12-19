import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    //METHOD GET LOGIN
    componentDidMount() {
    axios.get(`https://localhost:5000/login`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        //METHOD POST LOGIN
      componentDidMount() {
        axios.post(`https://localhost:5000/login`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
    return (
      <div>
        <h1>Loginn</h1>
      </div>
    )
  }
}
