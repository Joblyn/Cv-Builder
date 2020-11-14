import styled from 'styled-components/macro';

import { Container as BootstrapContainer, Button as BootstrapButton} from 'react-bootstrap';

export const Container = styled(BootstrapContainer)`
  margin: 10em 0!important;
  max-width: 100vw;
  padding: 0 1.5rem!important;
  over-flow-x: hidden!important;
  
  @media(max-width: 768px) {
    margin: -6em 0 0 0!important;
  }
`;

export const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #2E2E2E;

  @media(max-width: 768px) {
    font-size: 30px;
  }
`;

export const Item = styled.div`
  margin-top: 4rem;
  padding: 0 1.4rem!important;
  transition: all 0.3s;

  &:hover {
    box-sizing: border-box;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    cursor: default;
  }
`;

export const Icon = styled.img`
  margin: 10px;
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2E2E2E;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #474747;
`;

export const Button = styled(BootstrapButton)`
  text-align: center;
  padding: 1.4rem 1.8rem;
  font-size:1.18rem;
  font-weight: 600;
  line-height: 20px;
  background-color: #216DE0;
  border-radius: 6px;
  margin-top: 5.5rem;
  box-shadow: 0px 1px 20px -10px #216DE0;
  border: none;
  color: #fff;
`;
