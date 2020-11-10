import styled from 'styled-components/macro';
import { NavLink, Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Logo = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: #216DE0;
  cursor: pointer;
  user-select: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #020202;
  padding: .76rem .53rem;
  margin-left: 30px;
  ${({ active }) => active && `border-bottom: 2px solid #216DE0`};
  ${({ active }) => active && `color: #216DE0`};

  &:hover {
    color: #216DE0;
  }
`;

export const Button = styled(ReactRouterLink)`
  margin-left: 10px;
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: #216DE0;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  border-radius: 6px;
  color: #fff;
  margin-left: 30px;
`;
