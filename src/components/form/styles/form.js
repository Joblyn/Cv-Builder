import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0'};
  position: relative;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 3rem;
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
  margin-left: auto;
  border-radius: 6px;
  text-align: center;
  width: 9rem;
  height: 3rem;
  font-size:1.18rem;
  font-weight: 600;
  line-height: 20px;
  background-color: #216DE0;
  margin-top: 30px;
  border: none;
  color: #fff;
  position: absolute;
  right: 0;
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
    margin-top: 0;
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