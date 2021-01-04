import React from 'react';
import { Container, Wrap, BounceBall, Text, LockBody } from './styles/loading';
import './styles/spinner.css';

export function Loading() {
  return ( 
     <Container>
        <LockBody />
        <Wrap>
          <BounceBall/>
          <Text>Now Loading</Text>
        </Wrap>
      </Container>
  )
};

export function Spinner({ ...restProps }){
  return (
    <div className="lds-ring" {...restProps}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}