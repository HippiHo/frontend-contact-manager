import React, { Component } from "react";

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const contact = this.props.input.contact;
    const input = {
      name: {
        name_prefix: contact.name_prefix,
        first_name: contact.first_name,
        last_name: contact.last_name
      },
      organisation: contact.organisation,
      address: {
        street: contact.street,
        post_code: contact.post_code,
        city: contact.city
      },
      phone_number: {
        mobile: contact.mobile_phone_number,
        private: contact.private_phone_number,
        business: contact.business_phone_number
      },
      email: {
        private: contact.private_email,
        business: contact.business_email
      },
      languages: contact.languages,
      birthday: contact.birthday,
      relationship: contact.relationship
    };
    // run isValid functions
    fetch("http://localhost:4000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
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
          type="radio"
          className="form-check-input"
          id={lang}
          name="languages"
          value={lang}
          required
          onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
          <div className="row">
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
                onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
                onChange={this.handleNameChange}
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
            onChange={this.handleNameChange}
          />

          <h4>Relationship</h4>
          <input
            type="text"
            className="form-control col-lg-5"
            placeholder="Coworker"
            id="relationship"
            name="relationship"
            onChange={this.handleNameChange}
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
