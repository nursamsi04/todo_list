import React from "react";
import "./style_main.css";

// import NavigationBar from "../components/navbar";
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";

class MainPage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="box">
          <h1>TO DO LIST MINI PROJECT</h1>
          <div className="button">
            <div className="mb-6">
              <Button variant="primary" size="lg">
                Login
              </Button>{" "}
              <Button variant="primary" size="lg">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
