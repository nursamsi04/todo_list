import React from "react";
// import "../components/navbar";
import { Navbar, Container, Button } from "react-bootstrap";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className="main_content">
          <div className="main_header">
            <Navbar>
              <Container>
                <Navbar.Brand>
                  <b>TODO LIST APP</b>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Button variant="outline-primary">Primary</Button>{" "}
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <div className="box-main">
            <h3>What’s a plan for to day</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
