import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  max-width: 500px;
  padding: 0.5rem 0.5rem;
  background: #F2F6FB;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Group = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center; 
`;
export const Button = styled(BootstrapButton)`
  text-align: center;
  ${'' /* padding: 0.9rem 3.8rem; */}
  width: 10rem;
  height: 3rem;
  font-size:1rem;
  font-weight: 600;
  line-height: 20px;
  background-color: #216DE0;
  border-radius: 6px;
  border: none;
  color: #fff;
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 20px;
  color: #2E2E2E;
  margin-bottom: 0;
`;
export const Image = styled.img`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
