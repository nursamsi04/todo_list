import React from "react";
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";

class RegisterPage extends React.Component {
  render() {
    return (
      <div>
        {/* {<NavigationBar />} */}
        <div className="container">
          <Form className="formLogin ">
            <h2>Register</h2>
            <Form.Group
              className="mb-2 p-1"
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
              className="mb-2 p-1"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="email" placeholder="password" />
            </Form.Group>
            <Form.Group
              className="mb-2 p-1"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="email" placeholder="password" />
            </Form.Group>
            <Form.Group
              className="mb-2 p-1"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control size="lg" type="email" placeholder="password" />
            </Form.Group>
            <Row>
              <Col md={6}>
                <h6 className="mt-4 ">
                  <a href="#" className="mt-3">
                    Login
                  </a>{" "}
                  if you have account
                </h6>
              </Col>
              <Col md={{ span: 2, offset: 3 }}>
                <Button href="#" variant="primary mt-3 " size="lg">
                  {" "}
                  Register{" "}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
export default RegisterPage;
