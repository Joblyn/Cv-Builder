import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 10em 0!important;
  max-width: 100vw;
  padding: 0 1.5rem!important;
  over-flow-x: hidden!important;
  
  @media(max-width: 768px) {
    margin: 9em 0 0 0!important;
  }`;

export const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #2E2E2E;
  margin-bottom: 1.6em;

  @media(max-width: 768px) {
    font-size: 30px;
  }`;

export const Image = styled.img``;

export const Steps = styled.div`
  padding-left: 0;
`;

export const Step = styled.div`
  margin: 2.5rem 0;
`;

export const Indicator = styled.div`
  border: 2px solid #216DE0;
  display:flex;
  justify-content:center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  width: 2.8rem;
  height: 3rem;
  letter-spacing: 0em;
  color: #216DE0;
  transition: all 0.4s;

  &:hover {
    background-color: #216DE0;
    color: #fff;
    cursor: default;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2E2E2E;
`;

export const Text = styled.div`

`;

export const Group = styled.div``;

