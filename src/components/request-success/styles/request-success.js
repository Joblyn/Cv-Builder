import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { Link as ReactRouterLink } from 'react-router-dom'; 

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
export const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index:10;
  display: block;
`;
export const Container = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 800px;
  transform: translate(-50%, -50%);
  padding: 5rem 1rem;
  text-align: center;
  display: flex;
  jusitify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  z-index: 20;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`; 
export const Image = styled.img`
  position: absolute;
  right: 0;
  top: 2rem;
  width: 300px;
`; 
export const Icon = styled(FontAwesomeIcon)`
  ${({ type }) => type === 'times' ? 'position: absolute; top: 2.5rem; right: 4rem; cursor: pointer; opacity: 0.5' : null};
  font-size: ${({ type }) => type === 'times' ? '1.5rem' : '8rem'};
  margin: ${({ type }) => type === 'times' ? '0.5rem' : '2rem'};
  background-color: ${({ type }) => type === "times" ? 'inherit' : '#fff'};
  color: ${({ type }) => type === "times" ? '#474747' : '#216DE0'};
  transition: all 0.3s;
  animation: show 0.2s ease-in-out;
  border-radius: 50%;

  &:hover {
    ${({ type }) => type === 'times' ? 'opacity: 1': null};
  }
  @media (max-width: 768px) {
    margin: ${({ type }) => type === 'times' ? null : '1rem'};
    ${({ type }) => type === 'times' ? 'top: 1rem; right: 1rem' : null};
  }

  @-ms-keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
      visibility: visible;
    }
  }
  @-moz-keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
      visibility: visible;
    }
  }
  @-webkit-keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
      visibility: visible;
    }
  }
  @keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
      visibility: visible;
    }
  }
`; 
export const Notice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 36.9412px;
  line-height: 45px;
  color: #2E2E2E;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: normal;
  }
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