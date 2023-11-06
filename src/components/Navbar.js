import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <Nav>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/pill-entry">Pill Entry</NavItem>
    <NavItem to="/slot">Slot</NavItem>
    <NavItem to="/view-pills">View Pills</NavItem>
  </Nav>
);

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 15px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  color: white;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
