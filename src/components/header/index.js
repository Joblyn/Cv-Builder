import React from 'react';
import { NavBar, Brand, Collapse, Link, Toggle, NavButton, Group, Avatar, User, UserName, TextLink, UserNav } from './styles/header';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}

Header.NavButton = function HeaderNavButton({ children, ...restProps }) {
  return <NavButton {...restProps}>{children}</NavButton>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.User = function HeaderUser({ displayName, ...restProps }) {
  
  return <User {...restProps}>
    <Avatar icon={faUserCircle}/>
    <UserName>{displayName}</UserName>
  </User>
}

Header.UserNav = function HeaderUserNav({ children, ...restProps }) {
  return <UserNav {...restProps}>{children}</UserNav>
}