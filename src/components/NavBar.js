import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // return (
  //     <Navbar bg="dark" variant="dark">
  //         <Navbar.Brand href="/">
  //             <img
  //                 src={require("../assets/nhl.jpg")}
  //                 width="50"
  //                 height="50"
  //                 className="d-inline-block align-top"
  //                 alt="NHL logo"
  //             />
  //         </Navbar.Brand>
  //             <Nav className="ml-auto">
  //                 <Nav.Link href="/">Home</Nav.Link>
  //             </Nav>
  //     </Navbar>
  // )
  const navBar = {
    maxWidth: "100%",
    backgroundColor: "black",
    paddingLeft: "20px",
    paddingRight: "10px",
    overflow: "hidden",
    // paddingTop: '1px',
    // paddingBottom: '1px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const logo = {
    display: "inline-block",
    // width: '175px',
    verticalAlign: "middle"
    // color: 'white',
    // paddingTop: '5px',
    // objectFit: 'cover',
    // minHeight: '100vh'
    // height: '100%'
  };

  const img = {
    width: "8vw",
    height: "8vh",
    marginTop: "-10px",
    marginBottom: "-20px",
    objectFit: "contain"
  };

  const navLinks = {
    display: "flex",
    listStyle: "none",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "1px",
    fontSize: "1.3vmin"
  };

  const navItem = {
    display: "inline-block",
    padding: "10px 20px 0",
    textDecoration: "none",
    color: "white"
  };

  return (
    <nav style={navBar}>
      <NavLink to={"/"}>
        <p style={logo}>
          <img src={require("../assets/nhl.jpg")} alt="NHL Logo" style={img} />
        </p>
      </NavLink>
      <ul style={navLinks}>
        <li>
          <NavLink to={"/teams"} style={navItem} className="nav-font">
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"} style={navItem} className="nav-font">
            Home{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
