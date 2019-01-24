import React, { Component } from "react";

class Form extends Component {
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
        <label className="form-check-label mr-3" htmlFor={lang}>
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
              />
            </div>
            <div className="col-4">
              <label htmlFor="firstname">First name *</label>
              <input
                type="text"
                onChange={this.props.handleFirstName}
                className={
                  this.props.form.firstName
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Your first name"
                id="firstname"
              />
            </div>
            <div className="col-5">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                onChange={this.props.handleLastName}
                className={
                  this.props.form.lastName
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Your last name"
                id="lastname"
              />
            </div>
          </div>
          <h4>Organisation</h4>
          <label htmlFor="organisation">Organisation name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Organisation"
            id="organisation"
          />
          <h4>Phone numbers</h4>
          <div className="row">
            <div className="col-4">
              <label htmlFor="mobile-number">Mobile number *</label>
              <input
                type="text"
                onChange={this.props.handleMobileNumber}
                className={
                  this.props.form.mobile
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Mobile"
                id="mobile-number"
              />
            </div>
            <div className="col-4">
              <label htmlFor="private-number">Private number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Private"
                id="private-number"
              />
            </div>
            <div className="col-4">
              <label htmlFor="business-number">Business number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Business"
                id="business-number"
              />
            </div>
          </div>
          <h4>E-mail</h4>
          <div className="row mt-3">
            <div className="col-6">
              <label htmlFor="private-email">Private email</label>
              <input
                type="email"
                className="form-control"
                id="private-email"
                aria-describedby="emailHelp"
                placeholder="private"
              />
            </div>
            <div className="col-6">
              <label htmlFor="business-email">Business email</label>
              <input
                type="email"
                className="form-control"
                id="business-email"
                aria-describedby="emailHelp"
                placeholder="business"
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
