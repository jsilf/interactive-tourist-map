import styled from "styled-components";
import { Burger } from "./Burger";

const Nav = styled.nav<any>`
  width: 450px;
  height: 55px;
  position: relative;
  z-index: 2;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Burger open />
    </Nav>
  );
};
