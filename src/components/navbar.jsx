import React from "react";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#F3E8E8" }}>
        <Container>
          <Navbar.Brand href="#home">TODO-LIST</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button href="#" variant="danger m-2">
              {" "}
              LOGIN{" "}
            </Button>
            <Button href="#" variant="outline-primary">
              SING UP
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavigationBar;
