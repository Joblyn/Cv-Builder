import React from 'react';
import { Container, Group, Logo, Link, Button } from './styles/header';


export default function Header({ children, restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({...restProps}) {
  return <Logo {...restProps}>Resume Builder</Logo>
} 

Header.Link = function HeaderLink({ children, active, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}