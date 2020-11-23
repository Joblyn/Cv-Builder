import styled from 'styled-components';

export const Icon = styled.img`
  transition: .2s all ease;
`;
export const Container = styled.div`
  border-radius: 50%;
  border: 1px solid #2E2E2E;
  background: #FFFFFF;
  box-sizing: border-box;
  width: 38px;
  height: 38px;
  margin: 0 1.05rem;
  display: flex;
  justify-content:center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 .8rem;
  }

  &:hover {
    cursor: pointer;

    ${Icon} {
      transform: scale(2);
    }
  }
`;