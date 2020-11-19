import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
export const Overlay = styled.div`
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index:-10;
`;
export const Container = styled.div`
  position: relative;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`; 
export const Image = styled.img`
  position: absolute;
  right: 0;
  top: 4rem;
`; 
export const Icon = styled(FontAwesomeIcon)`
  font-size: 80px;
  background-color: ${({ type }) => type === "times" ? 'inherit' : '#216DE0'};
  color: ${({ type }) => type === "times" ? '#474747' : '#fff'};  
`; 
export const Notice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 36.9412px;
  line-height: 45px;
  color: #2E2E2E;
`; 
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16.6235px;
  line-height: 25px;
  text-align: center;
  color: #474747;
`; 
export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: #216DE0; 
`;