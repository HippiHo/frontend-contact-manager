import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      input: {},
      validation: {}
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

  setName = element => {
    this.setValidation(element, true);
    this.setState(state => ({
      input: {
        ...state.input,
        contact: {
          ...state.input.contact,
          [element.name]: element.value
        }
      }
    }));
  };
  setPhone = element => {
    this.setValidation(element, true);
    this.setState(state => ({
      input: {
        ...state.input,
        phones: {
          ...state.input.phones,
          [element.name]: element.value
        }
      }
    }));
  };
  setValidation = (element, validation) => {
    this.setState(state => ({
      validation: {
        ...state.validation,
        [element.id]: validation
      }
    }));
  };

  // handleFirstName = e => {
  //   if (/^[a-zA-Z]+$/.test(e.target.value)) {
  //     this.setState({ firstName: true });
  //   } else {
  //     this.setState({ firstName: false });
  //   }
  // };

  // handleLastName = e => {
  //   if (/^[a-zA-Z]+$/.test(e.target.value)) {
  //     this.setState({ lastName: true });
  //   } else {
  //     this.setState({ lastName: false });
  //   }
  // };

  // handleMobileNumber = e => {
  //   if (/^[+]?[0-9]{6,20}$/.test(e.target.value)) {
  //     this.setState({ mobile: true });
  //   } else {
  //     this.setState({ mobile: false });
  //   }
  // };

  render() {
    return (
      <div className="app container">
        <Header />
        <Form
          form={this.state}
          input={this.state.input}
          validation={this.state.validation}
          setValidation={this.setValidation}
          setName={this.setName}
          setPhone={this.setPhone}
          // handleFirstName={this.handleFirstName}
          // handleLastName={this.handleLastName}
          // handleMobileNumber={this.handleMobileNumber}
          // handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
