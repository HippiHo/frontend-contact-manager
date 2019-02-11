import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts card">
        <div class="card-body">
          <h2 class="card-title" id="contacts">
            My contacts
          </h2>
          <div className="row">
            {/* How to make it a row? */}
            <div className="col-lg-6">
              {this.props.contacts &&
                this.props.contacts.map((contact, _id) => (
                  <div className="contact mr-5">
                    <h4>
                      <i className="fas fa-user" />
                      &nbsp;&nbsp; {contact.name.name_prefix}&nbsp;
                      {contact.name.first_name}&nbsp;
                      {contact.name.last_name}
                    </h4>
                    <h5>Organisation: {contact.organisation}</h5>
                    <ul>
                      <li>Birthday: {contact.birthday}</li>
                      <li>Relationship: {contact.relationship}</li>
                    </ul>
                    <p>
                      <b>Address:</b> {contact.address.street}
                      <br />
                      {contact.address.post_code} {contact.address.city}
                    </p>
                    <p>
                      <b>Mobile phone number:</b> {contact.phone_number.mobile}
                    </p>
                    <p>
                      <b>Private phone number:</b>{" "}
                      {contact.phone_number.private}
                    </p>
                    <p>
                      <b>Business phone number:</b>{" "}
                      {contact.phone_number.business}
                    </p>
                    <p>
                      <b>Private E-mail:</b> {contact.email.private}
                    </p>
                    <p>
                      <b>Business E-mail:</b> {contact.email.business}
                    </p>
                    <p>
                      <b>Languages:</b> {contact.languages}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
