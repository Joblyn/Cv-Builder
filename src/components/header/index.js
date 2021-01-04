import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NavBar, Brand, Collapse, Link, Toggle, NavButton, Group, Avatar, User, UserName, TextLink, UserNav, Icon, Item } from './styles/header';
import { AiOutlineMenu } from 'react-icons/ai';
import { Spinner } from '../loading';

export default function Header({ expand, bg, children, restProps }) {
  return <NavBar expand={expand} bg={bg} {...restProps}>{children}</NavBar>
}

Header.Brand = function HeaderBrand({to, ...restProps}) {
  return <Brand to={to} {...restProps}>Resume Builder</Brand>
} 

Header.Toggle = function HeaderToggle({...restProps}) {
  return <Toggle {...restProps}><AiOutlineMenu/></Toggle>
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

Header.Item = function HeaderItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Header.Icon = function HeaderIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon> 
}

Header.NavButton = function HeaderNavButton({ children, ...restProps }) {
  return <NavButton {...restProps}>{children}</NavButton>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.User = function HeaderUser({ displayName, ...restProps }) {
  return <User {...restProps}>
    {displayName ? 
    <>
    <Avatar icon={faUserCircle}/>
    <UserName>{displayName}</UserName>
    </>  :
    <Spinner style={{ position: 'absolute'}}/>
    }
  </User>
}

Header.UserNav = function HeaderUserNav({ children, ...restProps }) {
  return <UserNav {...restProps}>{children}</UserNav>
}