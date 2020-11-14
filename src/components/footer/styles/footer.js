import styled from 'styled-components/macro';
import { Container as BootstrapContainer, Row as BootstrapRow } from 'react-bootstrap';
import {Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled(BootstrapContainer)`
  background-color: #216DE0;
  color: #ffffff;
  max-width:100%!important;
  padding: 2rem 0;
  margin-top: 10rem;
`;
export const Row = styled(BootstrapRow)`
  margin: 0!important;
  width: 100%!important;
`;
export const Column = styled.div`
  margin-bottom: 1.5rem;
`;
export const Link = styled(ReactRouterLink)`
  color: #fff!important;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  transition: all 0.1s ease;

  :hover{
    text-decoration: none;
    font-weight: bold;
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
`;
export const Brand = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;