import styled from 'styled-components/macro';
import { Container as BootstrapContainer } from 'react-bootstrap';
//  Container, Heading, Title, Content, Image, Inner, Break 

export const Container = styled(BootstrapContainer)`
  max-width: 100%!important;
`;

export const Heading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #216DE0;
  padding-left: calc(3rem + 15px);
  padding-top: 1rem;
`;
export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #2E2E2E;
`;
export const Content = styled.div``;
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #474747;
`;
export const Image = styled.img`
  width: 90%;
`;
export const Inner = styled.div`
  @media (min-width: 768px) {
    ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}`};
    ${({ marginTop }) => marginTop && `margin-top: ${marginTop}!important`};
  }
`;
export const Break = styled.br``;
export const Group = styled.div``;
export const Team = styled.div``;
export const Member = styled.div``;
export const Name = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #2E2E2E;
`;

export const Portrait = styled.img``;