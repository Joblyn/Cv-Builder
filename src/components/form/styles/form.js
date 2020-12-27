import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';
import * as ROUTES from '../../../constants/routes';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.form`
  width: 100%;
  max-width: ${({ type }) => type === 'resume' ? '' : '600px'};
  margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '0'};
  position: relative;
  margin-bottom: ${({ location }) => (location === ROUTES.SIGN_UP || ROUTES.SIGN_IN) ? '1rem' : '8rem'};
  padding-left:1.2rem;
  ${({ type }) => type === 'resume' && `padding-right: 1.2rem`};
  ${({ location }) => location === (ROUTES.SIGN_UP || ROUTES.SIGN_IN) ? 'margin-top: 1.5rem' : null};
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: ${({ location }) => location === (ROUTES.SIGN_UP || ROUTES.SIGN_IN) ? '1rem' : '3rem' };
    padding: 0 1rem;
  }
  @media (max-width: 992px) {
    ${({ type }) => type === 'resume' && 'margin-top: 0; padding-top: .8rem;'};
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
  background: ${({ typ }) => typ === 'resume' ? '#F8F8F8' : '#fff'};
  border: ${({ typ }) => typ === 'resume' ? '1px solid #CDCDCD': '2px solid #216DE0'};
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
    color: ${({ typ }) => typ === 'resume' ? '#B1B1B1' : 'red'};
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

  @media (min-width: 992px) {
    ${({row }) => row && 'flex-direction: row'};
  }

  &:first-of-type {
    margin-top: ${({ location }) => location === (ROUTES.SIGN_UP ||  ROUTES.SIGN_IN) ? '2rem' : ({ type }) => type === 'resume' ? '2rem' : '0'};
    ${'' /* @media(min-width: 992px) {
      ${({ row }) => row && 'margin-top: 2rem'};
    }; */}
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
  font-size: ${({ fontSize }) => fontSize ? fontSize : '0.8rem'};
  color: red;
  transform: 0.2s all;
  opacity: 1;
  margin-bottom: 0!important;
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
  ${({ showOnlyOnSmallView }) => showOnlyOnSmallView && `margin-left: 1.2rem; margin-top: 1.3rem; color: #000`};


  @media (min-width: 768px) {
    ${({ showOnlyOnSmallView }) => showOnlyOnSmallView && `display: none;`};
  }
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: #216DE0;

  &:hover {
    color: #216DE0;
  }
`;