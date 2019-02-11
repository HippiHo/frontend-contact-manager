import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <h2 id="contacts">My contacts</h2>
        <div className="row">
          {/* How to make it a row? */}
          <div className="col-lg-6 card">
            {this.props.contacts &&
              this.props.contacts.map((contact, _id) => (
                <div className="contact mx-auto">
                  <h4 className="person">
                    <i className="fas fa-user" />
                    &nbsp;&nbsp; {contact.name.name_prefix}&nbsp;
                    {contact.name.first_name}&nbsp;
                    {contact.name.last_name}
                  </h4>
                  <h5>
                    <b>From: {contact.organisation}</b>
                  </h5>
                  <h6>
                    <b>Address:</b>
                  </h6>
                  <p className="address">
                    {contact.address.street}
                    <br />
                    {contact.address.post_code} {contact.address.city}
                  </p>
                  <h6>
                    <b>Phone:</b>
                  </h6>
                  <p>
                    <b>Mobile:</b> {contact.phone_number.mobile}
                  </p>
                  <p>
                    <b>Private:</b> {contact.phone_number.private}
                  </p>
                  <p>
                    <b>Business:</b> {contact.phone_number.business}
                  </p>
                  <h6>
                    <br />
                    <b>E-mail:</b>
                  </h6>
                  <p>
                    <b>Private:</b> {contact.email.private}
                  </p>
                  <p>
                    <b>Business:</b> {contact.email.business}
                  </p>
                  <ul>
                    {/* How to make multiple languages? */}
                    <li>
                      <b>Languages:</b> {contact.languages}
                    </li>
                    <li>
                      <b>Birthday:</b> {contact.birthday}
                    </li>
                    <li>
                      <b>Relationship:</b> {contact.relationship}
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
