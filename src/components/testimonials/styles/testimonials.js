import styled from 'styled-components/macro';
import { Button as BootstrapButton } from 'react-bootstrap';
export const Container = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  over-flow-x: hidden;
`;

export const Background = styled.img`
  position: absolute;
  top: -11rem;
  left: -3.5em;

  @media(max-width: 768px) {
    top: -5em;
    left: -3.7em;
    transform:scale(0.8);
  }
`;

export const Heading = styled.h3`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #2E2E2E;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 4rem;
  }
`;

export const Button = styled(BootstrapButton)`
  text-align: center;
  margin-top: 5.5rem!important;
  padding: 1.4rem 1.8rem;
  font-size:1.18rem;
  font-weight: 600;
  line-height: 20px;
  background-color: #216DE0;
  border-radius: 6px;
  margin-top: 30px;
  box-shadow: 0px 1px 20px -10px #216DE0;
  border: none;
  color: #fff;
`;

export const Inner = styled.div`
  background: #216DE0; 
  padding: 2.5rem;
  max-width: 800px;
  min-width: 300px;
  height:12rem;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.7rem;

  @media (max-width: 768px) {
    height: 18rem;
  }
`;
export const Text = styled.p`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 30px;
  text-align: center;

  @media (max-width: 800px) {
    font-size: normal!important;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%); 
  vertical-align: middle;
`;
export const Profession = styled.p`
  margin-top: -10px;
`;
export const Name = styled.p`
  margin: 2rem 0 .8rem 0;
  font-style: normal;
  font-weight: 500;
  font-size: 1.15;
  line-height: 29px;
  color: #2E2E2E;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    font-weight: 600;
  }
`;

