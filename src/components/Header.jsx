import React from "react";

const Header = props => {
  return (
    <div className="header">
      <h1>Contact Manager</h1>
      <h3 className="header_end">Organize your contacts</h3>
      <a href="#contacts">
        <i class="fas fa-users fa-5x" title="Go to contacts" />
      </a>
    </div>
  );
};

export default Header;
