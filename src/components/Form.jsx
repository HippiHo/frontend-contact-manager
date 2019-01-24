import React, { Component } from "react";

class Form extends Component {
  firstName = React.createRef();
  lastName = React.createRef();
  eMail = React.createRef();
  man = React.createRef();

  handleChange = e => {
    e.preventDefault();
    let object = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      eMail: this.eMail.current.value,
      [this.man.current.value]: this.man.current.checked
    };
  };

  /*
  handleSubmit = e => {
    e.preventDefault();
    let object = {
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      eMail: this.eMail.current.value,
      [this.man.current.value]: this.man.current.checked
    };

  

    fetch("http://localhost:5000/contact", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(object), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error));
  };

  */

  render() {
    const languages = ["en", "de", "fr", "he", "ar", "es", "tr", "pl", "gr"];
    const checkboxes = languages.map(lang => (
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={lang}
          name={lang}
        />
        <label className="form-check-label mr-3" for={lang}>
          {lang}
        </label>
      </div>
    ));

    // Create a function on submit that reads the form fields and is performing a fetch post request to a post route on the server
    return (
      <div>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <h4>Name</h4>
          <div className="row">
            <div className="col-2">
              <label htmlFor="firstname">Name Prefix</label>
              <input
                type="text"
                className="form-control"
                placeholder="Prefix"
                id="firstname"
                //                onChange={this.props.getInput}
                ref={this.firstName}
              />
            </div>
            <div className="col-4">
              <label htmlFor="firstname">First name *</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your first name"
                id="firstname"
                //                onChange={this.props.getInput}
                ref={this.firstName}
              />
            </div>
            <div className="col-5">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your last name"
                id="lastname"
                //                onChange={this.props.getInput}
                ref={this.lastName}
              />
            </div>
          </div>
          <h4>Organisation</h4>
          <label htmlFor="firstname">Organisation name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Organisation"
            id="firstname"
            //                onChange={this.props.getInput}
            ref={this.firstName}
          />
          <h4>Phone numbers</h4>
          <div className="row">
            <div className="col-4">
              <label htmlFor="firstname">Mobile number *</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile"
                id="firstname"
                //                onChange={this.props.getInput}
                ref={this.firstName}
              />
            </div>
            <div className="col-4">
              <label htmlFor="firstname">Private number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Private"
                id="firstname"
                //                onChange={this.props.getInput}
                ref={this.firstName}
              />
            </div>
            <div className="col-4">
              <label htmlFor="lastname">Business number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Business"
                id="lastname"
                //                onChange={this.props.getInput}
                ref={this.lastName}
              />
            </div>
          </div>
          <h4>E-mail</h4>
          <div className="row mt-3">
            <div className="col-6">
              <label htmlFor="email">Private email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="private"
                //              onChange={this.props.getInput}
                ref={this.eMail}
              />
            </div>
            <div className="col-6">
              <label htmlFor="email">Business email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="business"
                //              onChange={this.props.getInput}
                ref={this.eMail}
              />
            </div>
            <div>
              <h4>Languages *</h4>
              <div className="row">{checkboxes}</div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Save contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
