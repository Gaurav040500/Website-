import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { MdSearch } from "react-icons/md";
import './NavbarComponent.css';

const NavbarComponent = () => {
  const [showInput, setShowInput] = useState(false); // State to manage input visibility
  const [searchText, setSearchText] = useState(""); // State for input value

  const handleSearchClick = () => {
    setShowInput(true); // Show input field when search icon is clicked
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value); // Update input value
  };

  const handleInputBlur = () => {
    if (searchText === "") {
      setShowInput(false); // Hide input field if it's empty
    }
  };

  return (
    <Navbar bg="" variant="dark" expand="lg" className="py-3 custom-navbar sticky-top">
      <Navbar.Brand href="#" className="fw-bold">
        <div className="image-section">
          <img src="./images/Logo.jpg" alt="Logo" className="logo" />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Dropdown as={Nav.Item} className="nav-item mx-3">
            <Dropdown.Toggle as={Nav.Link} variant="link" id="dropdown-service" className="text-white">
              Service
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item} className="nav-item mx-3">
            <Dropdown.Toggle as={Nav.Link} variant="link" id="dropdown-work" className="text-white">
              Work
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item} className="nav-item mx-3">
            <Dropdown.Toggle as={Nav.Link} variant="link" id="dropdown-resource" className="text-white">
              Resource
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={Nav.Item} className="nav-item mx-3">
            <Dropdown.Toggle as={Nav.Link} variant="link" id="dropdown-about" className="text-white">
              About
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-custom">
              <Dropdown.Item href="#action1">Action 1</Dropdown.Item>
              <Dropdown.Item href="#action2">Action 2</Dropdown.Item>
              <Dropdown.Item href="#action3">Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <form className="d-flex align-items-center ms-auto">
          <button className="btn btn-outline-light me-3 custom-btn" type="submit" style={{ borderRadius: "10px",padding:"6px",width:"100px", }}>
            Contact us
          </button>
          <div className="input-group" style={{marginRight:"30px", color:"white"}}>
            {showInput ? (
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="form-control"
                
              />
            ) : (
              <MdSearch onClick={handleSearchClick} style={{ cursor: "pointer", fontSize: "24px" }} />
            )}
          </div>
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
