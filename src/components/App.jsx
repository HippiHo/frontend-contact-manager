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

  render() {
    return (
      <div className="app container">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
