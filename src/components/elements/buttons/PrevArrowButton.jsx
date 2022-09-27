import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const PrevArrowButton = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick}>
        <IoIosArrowBack />
      </Button>
    </>
  );
};

export default PrevArrowButton;

const Button = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.2rem;
  width: 2rem;
  height: 3rem;
  opacity: 0.9;
  display: block;
  position: absolute;
  cursor: pointer;
  transition: all 3ms ease;
  z-index: 3;
  color: ${({ theme }) => theme.darkgray};
  font-size: 2rem;
  @media screen and (min-width: 1024px) {
    /* Desktop */
    width: 4rem;
    height: 5rem;
    font-size: 4rem;
    top: 14rem;
    left: 1rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    /* Tablet */
    width: 3rem;
    height: 4rem;
    font-size: 3rem;
    top: 9rem;
    left: 1rem;
  }

  @media (max-width: 767px) {
    /* Mobile */
    top: 5rem;
    left: 1rem;
  }
`;
