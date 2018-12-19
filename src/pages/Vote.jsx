import React, { Component } from 'react'
import { Jumbotron, Container, Button, Row, Col} from 'reactstrap';
import MyCard from '../components/Card'
export default class Vote extends Component {
  render() {
    return (
      <div>
        <br/>
        <center><h1> Vote</h1></center>
        <br/>
        
        <Container>
          <Row>
            <Col xs="12" sm="12" md="6" lg="4">
              <MyCard/>
            </Col>
        
            <Col xs="12" sm="12" md="6" lg="4">
              <MyCard/>
            </Col>
          
            <Col xs="12" sm="12" md="6" lg="4">
              <MyCard/>
            </Col>
          </Row>

        </Container>
        
      </div>
    )
  }
}
