import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  position: relative;
  width: 250px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-gap: 20px;
  @media (max-width: 992px) {
    grid-gap: 20px;
  }
`;
export const Overlay = styled.div`
  display: none;
  background-color: rgba(0,0,0,0.5);
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  @media(max-width: 992px) {
    display: block;
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
  background: '#fff';
  border-radius: 6px;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  text-decoration: none;
  color: #CCCCCC;
  transition: all .2s;

  :hover {
    text-decoration: none;
    color: #fff;
    background: #216DE0;
    }
`;
export const Image = styled.img`
  margin-bottom: 10px;
`;

export const Icon = styled.div`

  position: absolute;
  font-size: 35px;
  @media (min-width: 992px) {
    display: none;
  }
`;