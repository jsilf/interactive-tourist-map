import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { IBurgerProps } from "../../../models/IBurgerProps";
import { Logo } from "./Logo";

const StyledDiv = styled.div<IBurgerProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: rgb(87, 111, 114);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 450px;
  transition: transform 0.3s ease-in-out;
  text-align: center;
  z-index: 9;

  @media screen and (max-width: 490px) {
    width: 100%;
  }
  ul {
    padding-top: 4rem;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  li {
    margin: 2rem;
    font-size: 1.6rem;
  }
`;

export const LeftNav = ({ open }: IBurgerProps) => {
  return (
    <StyledDiv open={open}>
      <Logo />
      <ul>
        <li>
          <NavLink className="link link-white" to={"/om"}>
            Om Gullholmen och Härmanö
          </NavLink>
        </li>
        <li>
          <NavLink className="link link-white" to={"/kartpunkter"}>
            Kartpunkter
          </NavLink>
        </li>
        <li>
          <NavLink className="link link-white" to={"/kontakt"}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </StyledDiv>
  );
};
