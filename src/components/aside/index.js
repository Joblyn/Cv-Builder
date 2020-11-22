import React from 'react';
import { Container, Button, Text, Image, Group } from './styles/aside';

export default function  Aside({ children , ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

Aside.Button =  function AsideButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

Aside.Text =  function AsideText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Aside.Image =  function AsideImage({src, ...restProps }) {
  return <Image {...restProps} src={src} alt=''/>
}

Aside.Group =  function AsideGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}