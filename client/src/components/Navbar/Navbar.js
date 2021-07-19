import React from 'react';
import { Navbar as NavbarB, Nav, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// eslint-disable-next-line react/display-name
// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
    
//   >
//     {children}
//     &#x25bc;
//   </a>
// ));

function Navbar() {
  const nav = <NavbarB fixed="top" bg="light" expand="sm">
    <LinkContainer exact to="/">
      <NavbarB.Brand>    
        StockMM
      </NavbarB.Brand>
    </LinkContainer>
    <NavbarB.Toggle aria-controls="basic-navbar-nav" />
    <NavbarB.Collapse id="basic-navbar-nav">
      <Nav>
        <LinkContainer exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/cryptocurrencies/BTC">
          <Nav.Link>Bitcoin</Nav.Link>
        </LinkContainer>
        <LinkContainer exact to="/cryptocurrencies">
          <Nav.Link>Currencies</Nav.Link>
        </LinkContainer>
        {/* <span className="nav-link">
        // <Nav.Link>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
              Currencies
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <LinkContainer exact to="/crypto">
                <Dropdown.Item>Cryptocurrencies</Dropdown.Item>
              </LinkContainer>
              <LinkContainer exact to="/forex">
                <Dropdown.Item>Forex</Dropdown.Item>
              </LinkContainer>
            </Dropdown.Menu>
          </Dropdown>
        // </Nav.Link>
        </span> */}
      </Nav>
    </NavbarB.Collapse>
  </NavbarB>;
  return nav;
}

export default Navbar;