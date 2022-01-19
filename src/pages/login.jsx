import React from "react";
// import NavigationBar from "../components/navbar";
import "./style.css";

import { Form, Row, Col, FormControl, Button } from "react-bootstrap";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        {/* {<NavigationBar />} */}
        <div className="container">
          <Form className="formLogin">
            <h1>LOGIN</h1>
            <Form.Group
              className="mb-4 p-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-4 p-2"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="email" placeholder="password" />
            </Form.Group>
            <Row>
              <Col md={6}>
                <h6 className="mt-4 ">
                  <a href="#" className="mt-3">
                    Register
                  </a>{" "}
                  if don’t have account
                </h6>
              </Col>
              <Col md={{ span: 3, offset: 3 }}>
                <Button href="#" variant="primary mt-3 " size="lg">
                  {" "}
                  LOGIN{" "}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
export default LoginPage;
