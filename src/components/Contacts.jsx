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
                      &nbsp;&nbsp; {contact.person.name.name_prefix}&nbsp;
                      {contact.person.name.first_name}&nbsp;
                      {contact.person.name.last_name}&nbsp;
                      {contact.organisation}
                    </h4>
                    <ul>
                      <li>Birthday: {contact.person.birthday}</li>
                      <li>Relationship: {contact.person.relationship}</li>
                    </ul>
                    {/* <p>Address: {contact.address.street}<br>{contact.address.post_code} {contact.address.city}</p> */}
                    <p>Mobile phone number: {contact.phone_number.mobile}</p>
                    <p>Private phone number: {contact.phone_number.private}</p>
                    <p>
                      Business phone number: {contact.phone_number.business}
                    </p>
                    {/* <p>Private E-mail: {contact.email.private}</p>
                    <p>Business E-mail: {contact.email.business}</p> */}
                    <p>Language: {contact.languages}</p>
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
