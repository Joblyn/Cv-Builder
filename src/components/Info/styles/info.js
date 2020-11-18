import styled from 'styled-components';
 
export const Container = styled.div`
  width: 100%;
  max-width: 500px;
`;
export const Heading = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #2E2E2E;
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #474747;
`;
export const Image = styled.img``;
export const Contact = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: normal;
  color: #2E2E2E;
  margin-bottom: 0!important;
  margin-left: 1.2rem;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  &:first-of-type {
    margin-top: 2.8rem;
  }
`;