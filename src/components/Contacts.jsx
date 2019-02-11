import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts card">
        <div class="card-body">
          <h2 class="card-title" id="contacts">
            My contacs
          </h2>
          {this.props.contacts &&
            this.props.contacts.map((contact, _id) => (
              <div className="contact mr-5">
                <h4>
                  <i className="fas fa-user" />
                  &nbsp;&nbsp;
                  {contact.person.name.first_name}&nbsp;
                  {contact.person.name.last_name}
                </h4>
                <p>Mobile phone number: {contact.phone_number.mobile}</p>
                <p>Language: {contact.languages}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Contacts;
