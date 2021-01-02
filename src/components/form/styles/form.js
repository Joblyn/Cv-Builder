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
  ${({ type }) => type === 'resume' ? `padding: 0 5%` : `padding: 0 1.2rem`};
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
  ${({ width }) => width && `width: ${width}`};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
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

export const InputDropdown = styled.select`
  background: ${({ typ }) => typ === 'resume' ? '#F8F8F8' : '#fff'};
  border: ${({ typ }) => typ === 'resume' ? '1px solid #CDCDCD': '2px solid #216DE0'};
  box-sizing: border-box;
  border-radius: 6px;
  height: ${({height}) => height ? height : '50px'}; 
  font-style: normal;
  font-weight: ${({ value }) => value ? '500' : '300'};
  font-size: 18px;
  line-height: 22px;
  color: ${({ value }) => value ? '#216DE0' : '#B1B1B1'};
  opacity: 1;
  padding: .5rem;
  width: ${({ width }) => width ? width : '100%'};
  margin-right: ${({ marginRight }) => marginRight ? marginRight : '0'};
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;

`;

export const Button = styled(BootstrapButton)`
  margin-left: ${({ position }) => position === 'right' ? 'auto' : '0'};
  border-radius: 6px;
  text-align: center;
  width: ${({ typ }) => (typ === 'resume') ? 'fit-content' : '9rem'};
  height: ${({ typ }) => !(typ === 'resume') ? 'fit-content' : '3rem'}; 
  font-size:${({ typ }) => typ === 'resume' ? '1.12rem' : '1.1rem'};
  font-weight: ${({ typ }) => typ === 'resume' ? '500' : '600'};
  line-height: ${({ typ }) => typ === 'resume' ? '26px' : '20px'};
  background-color: ${({ outline }) => outline ? '#fff' : '#216DE0'};
  margin-top: ${({ typ }) => typ === 'resume' ? '5rem' : ' 30px'};
  border: none;
  color: ${({ outline }) => outline ? '#216DE0' : '#fff'};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ typ }) => typ === 'resume' && 'box-shadow: 0px 1px 18px -10px #216DE0'};

  &:hover {
    ${({ outline }) => outline === 'true' && 'color: #216DE0; background-color: inherit'};
  }

  &:disabled {
    opacity: 1;
    background-color: #216DE0; 
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : '2rem'};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};

  @media (min-width: 992px) {
    ${({ row }) => row && 'flex-direction: row'};
    ${({ width }) => width && `width: ${width}`};
    ${({ marginRight }) => marginRight && `margin-right: ${marginRight}`};
    ${({ showOnlyOnSmallViewPort }) => showOnlyOnSmallViewPort && 'display: none'};
  }

  @media(max-width: 992px) {
    ${({ showOnlyOnLargeViewPort }) => showOnlyOnLargeViewPort && 'display: none'};
  }

  &:first-of-type {
    margin-top: ${({ location }) => location === (ROUTES.SIGN_UP ||  ROUTES.SIGN_IN) ? '2rem' : ({ type }) => type === 'resume' ? '2rem' : '0' };
  }
`;

export const TextArea = styled.textarea`
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
  resize: none;

  ::placeholder,
  ::-webkit-input-placeholder{
    color: ${({ typ }) => typ === 'resume' ? '#B1B1B1' : 'red'};
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
  font-weight: ${({ type }) => type === 'resume' ? '500' : '600'};
  font-size: ${({ type }) => type === 'resume' ? '24px' : '40px'};
  line-height: ${({ type }) => type === 'resume' ? '24px' : '48px'};
  color: ${({ type }) => type === 'resume' ? '#0056b3' : '#2E2E2E'};
  ${({ type }) => type === 'resume' && 'margin-bottom: -.8rem'};

  @media (min-width: 992px) {
    ${({ showOnlyOnSmallViewPort }) => showOnlyOnSmallViewPort && 'display: none'};
  }
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

export const SubHeading = styled.p`
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  margin-bottom: -1.6rem;
  font-size: 18px;
  font-weight: 500;
  color: #0056b3;
`;