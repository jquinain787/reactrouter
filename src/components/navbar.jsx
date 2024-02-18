import React from 'react';


function Navbar() {
  return (
    <nav>
        <div id="navbar">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/" className="Home">Home</Link>
        </div>

    </nav>
  );
}

export default Navbar;
