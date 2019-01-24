import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      input: {}
    };
  }

  componentWillMount = () => {
    fetch("http://localhost:4000/contacts")
      .then(resp => resp.json())
      .then(response => {
        this.setState({ contacts: response });
        console.log(response);
      });
  };

  handleFirstName = e => {
    if (/^[a-zA-Z]+$/.test(e.target.value)) {
      this.setState({ firstName: true });
    } else {
      this.setState({ firstName: false });
    }
  };

  handleLastName = e => {
    if (/^[a-zA-Z]+$/.test(e.target.value)) {
      this.setState({ lastName: true });
    } else {
      this.setState({ lastName: false });
    }
  };

  handleMobileNumber = e => {
    if (/^[+]?[0-9]{6,20}$/.test(e.target.value)) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  };

  render() {
    return (
      <div className="app container">
        <Header />
        <Form
          form={this.state}
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
          handleMobileNumber={this.handleMobileNumber}
        />
      </div>
    );
  }
}

export default App;
