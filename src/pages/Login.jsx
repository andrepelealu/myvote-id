import React, { Component } from 'react'
import axios from 'axios'
export default class Login extends Component {
  state = {
    email : '',
    password : ''
  };
  handleChange = event =>{
    this.setState({email: event.target.value});
    this.setState({password: event.target.value});
  }
  handleSubmit = event => {
    event.preventDefault();

    const data = {
      email : this.state.email,
      password : this.state.password
    }
    axios.post(`https://localhost:5000/login`, { data })
      .then(res => {
        //console.log('gagal',err)
        console.log(res)
        console.log(res.data)
      })
  }



  render() {
    //METHOD GET LOGIN
    // componentDidMount() {
    // axios.get(`https://localhost:5000/login`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons })
    //     //METHOD POST LOGIN
    //   componentDidMount() {
    //     axios.post(`https://localhost:5000/login`)
    //       .then(res => {
    //         const persons = res.data;
    //         this.setState({ persons })
    return (
      <div>
        <h1>Loginn</h1>


        <form onSubmit={this.handleSubmit}>
          <label for="">email</label>
          <input type="email" name="email" onChange={this.handleChange}/>


          <label for="">password</label>
          <input type="password" name="password" onChange={this.handleChange}/>


          <button type="submit">Login</button>
        </form>

      </div>
    )
  }
}
