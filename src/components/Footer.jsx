import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
var style = {
    // backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    // position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    color: "#6c757d",
}

var phantom = {
  display: 'block',
//   padding: '20px',
  height: '60px',
  width: '100%',
  "background-color": "#FAFAFA"
}

function Footer({ children }) {
    return (
        <div>
          <br/><br/>
           <div style={phantom} />
          <div>
          <Container>
                <Row>
                  <Col xs="6" sm="6" md="4" lg="2">
                    {/* <a href="https://www.undip.ac.id/language/id/"> <img height="100px" src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png"/></a> */}
                  </Col>
                  <Col xs="6" sm="6" md="4" lg="2">
                   <h4>About Us</h4>
                   BlockchainBlockchain
                   SecureSecureSecure
                   fastfast
                    {/* <a href="http://www.dinus.ac.id/"><img height="100px" src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358"/></a> */}
                  </Col>
                  <Col xs="6" sm="6" md="4" lg="2">
                    {/* <a href="https://www.unisbank.ac.id/"> <img height="100px" src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg"/></a> */}
                    <h4>Location</h4>
                    Khair Space
                    Gajah Mungkur
                  </Col>
                  <Col xs="6" sm="6" md="4" lg="2">
                    {/* <a href="http://www.java-valley.com/"> <img height="100px" src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png"/></a> */}
                    <h4>Phone</h4>
                    081392786220
                  </Col>
                  <Col xs="6" sm="6" md="4" lg="2">
                    {/* <a href="https://www.dynamiclearningid.org/"> <img height="100px" src="https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500"/></a> */}
                    <h4>Email</h4>
                    amin11lfc@gmail.com
                  </Col>
                  <Col xs="6" sm="6" md="4" lg="2">
                    {/* <a href="https://www.go-mekanik.com/"> <img height="100px" src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png"/></a> */}
                  </Col>
                  </Row>
            </Container>
          </div>
            <div style={phantom} />
            <div style={style}>
                {/* { children } */}
                <Container>
                    <Row>
                        <Col xs="12" align="center">
                            Copyright © Santren Koding 2018. All rights reserved.
                        </Col>
                        <Col xs="12">
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer