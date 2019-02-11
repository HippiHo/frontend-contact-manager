import React, { Component } from "react";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // run isValid functions
    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.props.input) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error)); // parses response to JSON
  };

  handleNameChange = e => {
    if (e.target.value.length > 1) {
      e.target.classList.add("is-valid");
      this.props.setName(e.target);
      this.checkIfInvalid(e.target);
    } else {
      this.checkIfValid(e.target);
    }
  };
  handlePhoneChange = e => {
    switch (e.target.id) {
      case "phone_type":
        this.props.setPhone(e.target);
        e.target.classList.add("is-valid");
        break;
      case "phone_country_code":
        if (e.target.value.match(/^\d{4}/)) {
          e.target.classList.add("is-valid");
          this.props.setPhone(e.target);
          this.checkIfInvalid(e.target); // trigger invalid at first letter
        } else {
          this.checkIfValid(e.target);
        }
        break;
      case "phone_number":
        if (
          e.target.value.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)
        ) {
          e.target.classList.add("is-valid");
          this.props.setPhone(e.target);
          this.checkIfInvalid(e.target); // trigger invalid at first letter
        } else {
          this.checkIfValid(e.target);
        }
        break;
      default:
        console.log("try again");
    }
    // what's the best method to check & validate phone entries, incl. country code?
  };
  checkIfInvalid = element => {
    if (this.props.validation[element.name] === false) {
      this.props.setValidation(element, true);
      this.toggleValidationClass(element);
      // disable submit
    }
  };
  checkIfValid = element => {
    if (this.props.validation[element.name] === true) {
      this.props.setValidation(element, false);
      this.toggleValidationClass(element);
    }
  };
  toggleValidationClass = element => {
    if (element.classList.contains("is-invalid")) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid"); // make it a toggle?
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    }
  };

  render() {
    const languages = ["en", "de", "fr", "he", "ar", "es", "tr", "pl", "gr"];
    const checkboxes = languages.map(lang => (
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={lang}
          name={lang}
          required
        />
        <label className="form-check-label mr-3" htmlFor={lang}>
          {lang}
        </label>
      </div>
    ));

    return (
      <div className="form_style">
        <form className="mt-5" onSubmit={this.handleSubmit} noValidate={true}>
          <p className="text-danger">* Please fill in the required fields!</p>
          <h4>Name</h4>
          <div className="row">
            <div className="col-lg-2">
              <label htmlFor="name_prefix">Name Prefix</label>
              <input
                type="text"
                className="form-control"
                placeholder="Dr."
                id="name_prefix"
                name="name_prefix"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="first_name">First name *</label>
              <input
                type="text"
                placeholder="Eva"
                id="first_name"
                name="first_name"
                // onChange={this.props.handleFirstName}
                // className={
                //   this.props.form.first_name
                //     ? "form-control is-valid"
                //     : "form-control is-invalid"
                // }
                className="form-control"
                onChange={this.handleNameChange}
                required
                autoFocus
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a first name.
              </div>
            </div>
            <div className="col-lg-5">
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                placeholder="Müller"
                id="last_name"
                name="last_name"
                // onChange={this.props.handleLastName}
                // className={
                //   this.props.form.last_name
                //     ? "form-control is-valid"
                //     : "form-control is-invalid"
                // }
                className="form-control"
                onChange={this.handleNameChange}
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a last name.
              </div>
            </div>
          </div>
          <h4>Organisation</h4>
          <input
            type="text"
            className="form-control col-lg-5"
            placeholder="World Health Organization"
            id="organisation"
            name="organisation"
          />
          <h4>Phone numbers</h4>
          <div className="row" onChange={this.handlePhoneChange}>
            <div className="col-lg-4">
              <label htmlFor="mobile_phone_number">Mobile number *</label>
              <input
                type="text"
                placeholder="+12345678901234"
                id="mobile_phone_number"
                name="mobile_phone_number"
                // onChange={this.props.handleMobileNumber}
                // className={
                //   this.props.form.mobile
                //     ? "form-control is-valid"
                //     : "form-control is-invalid"
                // }
                className="form-control"
                pattern="[+][0-9]{2}[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="private_phone_number">Private number</label>
              <input
                type="text"
                className="form-control"
                placeholder="+12345678901234"
                id="private_phone_number"
                name="private_phone_number"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="business_phone_number">Business number</label>
              <input
                type="text"
                className="form-control"
                placeholder="+12345678901234"
                id="business_phone_number"
                name="business_phone_number"
              />
            </div>
          </div>
          <h4>E-mail</h4>
          <div className="row mt-3">
            <div className="col-lg-6">
              <label htmlFor="private_email">Private email</label>
              <input
                type="email"
                className="form-control"
                id="private_email"
                name="private_email"
                pattern=".+@."
                size="30"
                aria-describedby="emailHelp"
                placeholder="evamuller@gmail.de"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="business_email">Business email</label>
              <input
                type="email"
                className="form-control"
                id="business_email"
                name="business_email"
                pattern=".+@."
                size="30"
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
                name="street"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="London"
                id="city"
                name="city"
              />
            </div>
            <div className="col-lg-4">
              <label htmlFor="post_code">Post code</label>
              <input
                type="number"
                className="form-control"
                placeholder="123456"
                id="post_code"
                name="post_code"
              />
            </div>
          </div>

          <h4>Birthday</h4>
          <input
            type="date"
            className="form-control col-lg-5"
            placeholder="mm/dd/yyyy"
            id="birthday"
            name="birthday"
          />

          <h4>Relationship</h4>
          <input
            type="text"
            className="form-control col-lg-5"
            placeholder="Coworker"
            id="relationship"
            name="relationship"
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
