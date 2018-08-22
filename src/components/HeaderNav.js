import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "react-bulma-components";

class HeaderNav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item>
            <Link to="/">
              <h1 style={{ fontSize: "25px" }}> Canine Commuter</h1>
            </Link>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          {/* <Navbar.Container>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>Docs</Navbar.Link>
              <Navbar.Dropdown boxed>
                <Navbar.Item href="#">Home</Navbar.Item>
                <Navbar.Item href="#">List</Navbar.Item>
                <Navbar.Item href="#">Another Item</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item active href="#">
                  Active
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="#">Second</Navbar.Item>
          </Navbar.Container> */}
          <Navbar.Container position="end">
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>Options</Navbar.Link>
              <Navbar.Dropdown boxed>
                <Navbar.Item>
                  <Link to="/account">Account</Link>
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default HeaderNav;
