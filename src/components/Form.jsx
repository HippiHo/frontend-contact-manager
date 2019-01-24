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

    return (
      <div>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <p className="text-danger">* Please fill in the required fields!</p>
          <h4>Name</h4>
          <div className="row">
            <div className="col-lg-2">
              <label htmlFor="firstname">Name Prefix</label>
              <input
                type="text"
                className="form-control"
                placeholder="Dr."
                id="firstname"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="firstname">First name *</label>
              <input
                type="text"
                onChange={this.props.handleFirstName}
                className={
                  this.props.form.firstName
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Eva"
                id="firstname"
              />
            </div>
            <div className="col-lg-5">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                onChange={this.props.handleLastName}
                className={
                  this.props.form.lastName
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="Müller"
                id="lastname"
              />
            </div>
          </div>
          <h4>Organisation</h4>
          <input
            type="text"
            className="form-control col-lg-5"
            placeholder="World Health Organization"
            id=""
          />
          <h4>Phone numbers</h4>
          <div className="row">
            <div className="col-lg-4">
              <label htmlFor="mobile-number">Mobile number *</label>
              <input
                type="text"
                onChange={this.props.handleMobileNumber}
                className={
                  this.props.form.mobile
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                placeholder="+12345678901234"
                id="mobile-number"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="private-number">Private number</label>
              <input
                type="text"
                className="form-control"
                placeholder="+12345678901234"
                id="private-number"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="business-number">Business number</label>
              <input
                type="text"
                className="form-control"
                placeholder="+12345678901234"
                id="business-number"
              />
            </div>
          </div>
          <h4>E-mail</h4>
          <div className="row mt-3">
            <div className="col-lg-6">
              <label htmlFor="private-email">Private email</label>
              <input
                type="email"
                className="form-control"
                id="private-email"
                aria-describedby="emailHelp"
                placeholder="evamuller@gmail.de"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="business-email">Business email</label>
              <input
                type="email"
                className="form-control"
                id="business-email"
                aria-describedby="emailHelp"
                placeholder="evamuller@gmail.de"
              />
            </div>
          </div>

          <h4>Address</h4>
          <div className="row mt-3">
            <div className="col-lg-4">
              <label htmlFor="street">Street</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mainroad 1"
                id="street"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="London"
                id="city"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="post-code">Post code</label>
              <input
                type="number"
                className="form-control"
                placeholder="123456"
                id="post-code"
              />
            </div>
          </div>

          <h4>Birthday</h4>
          <input
            type="date"
            className="form-control col-lg-5"
            placeholder="mm/dd/yyyy"
            id="birthday"
          />

          <h4>Relationship</h4>
          <input
            type="text"
            className="form-control col-lg-5"
            placeholder="Coworker"
            id="relationship"
          />

          <div className="mb-3">
            <h4>Languages *</h4>
            <div className="d-flex">{checkboxes}</div>
          </div>

          <button type="submit" className="btn btn-primary d-flex m-auto">
            Save contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
