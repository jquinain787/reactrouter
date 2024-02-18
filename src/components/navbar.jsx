import React from 'react';


function Navbar() {
  return (
    <div id="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/" className="Home">Home</Link>
    </div>
  );
}

export default Navbar;
