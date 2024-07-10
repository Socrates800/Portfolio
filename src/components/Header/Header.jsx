import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="main-header">
      <div className="heading">
        <span>WALEED</span>
        <span> BIN HAIDER</span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`navbar ${menuOpen ? "show" : ""}`}>
       <a href="" style={{color:"var(--blue)"}}><span>Home</span></a> 
       <a href=""><span>About</span></a> 
      <a href=""><span>Contact</span></a>  
       <a href=""><span>Download</span></a> 
      </div>
    </div>
  );
};

export default Header;
