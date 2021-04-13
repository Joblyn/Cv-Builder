import styled, { createGlobalStyle } from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const LockBody = createGlobalStyle`
  body { 
    ${'' /* overflowY: auto;
    overflowX: none; */}
  };
`;
export const Base = styled.div`
  @media (max-width: 992px) {
    position: absolute;
    left: ${({ showNav }) => (showNav ? "0" : "-280px")};
    top: 0;
    height: 100%;
    background: #f8f8f8;
    transition: all 0.2s ease-in-out;
    z-index: 10;
    overflow-y: auto;
    overflow-x: none;
  }
`;
export const Container = styled.nav`
  position: relative;
  width: 280px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-gap: 20px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 0rem 1rem 2rem 1rem;

  @media (max-width: 992px) {
    grid-gap: 20px;
    padding: 2rem 1rem;
  }
`;
export const Overlay = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  @media (max-width: 992px) {
    display: block;
    visibility: ${({ showNav }) => showNav ? 'visible' : 'hidden'};
    transition: all;
    transition-delay: ${({ showNav }) => showNav === false && '0.4s'};
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-bottom: 0;
`;
export const Item = styled(NavLink)`
  background: #fff;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: #ccc;
  transition: all 0.2s;

  :hover {
    text-decoration: none;
    color: #fff;
    background: #216de0;
  }
`;
export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  position: absolute;
  font-size: 35px;
  top: -8px;
  color: rgba(0, 0, 0, 0.7);
  ${({ type }) => type === "right" && `right: 1rem`};
  ${({ type }) => type === "left" && `left: 1rem`};

  @media (min-width: 992px) {
    display: none;
  }
`;
