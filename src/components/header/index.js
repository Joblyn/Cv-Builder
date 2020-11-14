import React from 'react';
import { NavBar, Brand, Collapse, Link, Toggle, NavButton, Group } from './styles/header';

export default function Header({ expand, bg, children, restProps }) {
  return <NavBar expand={expand} bg={bg} {...restProps}>{children}</NavBar>
}

Header.Brand = function HeaderBrand({to, ...restProps}) {
  return <Brand to={to} {...restProps}>Resume Builder</Brand>
} 

Header.Toggle = function HeaderToggle({...restProps}) {
  return <Toggle {...restProps}/>
} 

Header.Collapse = function HeaderCollapse({ children, ...restProps }) {
  return <Collapse {...restProps}>{children}</Collapse>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.NavButton = function HeaderNavButton({ children, ...restProps }) {
  return <NavButton {...restProps}>{children}</NavButton>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}
