import React from 'react';
import { Container, Icon } from './styles/icons';


export function BrandIcon({ src, ...restProps }){
  return <Container>
    <Icon {...restProps} src={src}/>
  </Container> 
}