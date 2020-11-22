import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';
import * as ROUTES from '../../../constants/routes';

export const Container = styled.form`
  width: 100%;
  max-width: 550px;
  margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0'};
  position: relative;
  margin-bottom: 8rem;
  

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: ${({ location }) => location === (ROUTES.SIGN_UP || ROUTES.SIGN_IN) ? '1rem' : '3rem' };
    padding: 0 1rem;
  }
`;
export const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #2E2E2E;
`;
export const Input = styled.input`
  background: white;
  border: 2px solid #216DE0;
  box-sizing: border-box;
  border-radius: 6px;
  height: ${({height}) => height ? height : '50px'}; 
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #216DE0;
  opacity: 1;
  padding: .5rem;

  ::placeholder,
  ::-webkit-input-placeholder{
    color: red;
    font-weight: 300;
  }
`;
export const Button = styled(BootstrapButton)`
  margin-left: ${({ position }) => position === 'right' ? 'auto' : '0'};
  border-radius: 6px;
  text-align: center;
  width: 9rem;
  height: 3rem; 
  font-size:1.1rem;
  font-weight: 600;
  line-height: 20px;
  background-color: #216DE0;
  margin-top: 30px;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 1;
    background-color: #216DE0; 
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;


  &:first-of-type {
    margin-top: ${({ location }) => location === (ROUTES.SIGN_UP || ROUTES.SIGN_UP) ? '2rem' : '0'};
  }
`;

export const TextArea = styled.textarea`
  background: white;
  border: 2px solid #216DE0;
  box-sizing: border-box;
  border-radius: 6px;
  height: ${({height}) => height ? height : '50px'}; 
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #216DE0;
  opacity: 1;
  padding: .5rem;

  ::placeholder,
  ::-webkit-input-placeholder{
    color: red;
    font-weight: 300;
  }
`;

export const Error = styled.p`
  font-size: 0.8rem;
  color: red;
  transform: 0.2s all;
  opacity: 1;
  margin-bottom: 0!important;
  display: ${({display}) => display ? display : 'none'};
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #2E2E2E;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${({ type }) => type === 'note' ? '15px' : '20px'};
  line-height: 22px;
  color: #474747;
`;