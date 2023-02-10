import { useState } from "react";
import styled from "styled-components";
import { IBurgerProps } from "../../../models/IBurgerProps";
import { LeftNav } from "./LeftNav";

const StyledBurger = styled.div<IBurgerProps>`
  width: 100%;
  position: absolute;
  z-index: 9;
  left: 20px;
  top: 20px;

  .burger-wrap {
    cursor: pointer;
    transform: ${({ open }) => (open ? "translateX(700%)" : "translateX(0)")};
    transition: all 0.3s linear;
    position: relative;
    z-index: 10;
    width: 50px;

    @media screen and (max-width: 768px) {
      transform: none;
    }

    div {
      width: 3rem;
      height: 0.55rem;
      margin: 0.4rem 0;
      background-color: ${({ open }) => (open ? "#fff" : "#2f4346")};
      border-radius: 8px;
      transform-origin: 2px;
      transition: all 0.3s linear;

      &:nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }
      &:nth-child(2) {
        transform: ${({ open }) =>
          open ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ open }) => (open ? 0 : 1)};
      }
      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const Burger = (props: IBurgerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledBurger
      open={open}
      // onKeyDown={() => setOpen(!open)}
      onClick={() => setOpen(!open)}>
      <LeftNav open={open} />
      <div className="burger-wrap">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledBurger>
  );
};
