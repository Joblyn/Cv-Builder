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

export function Spinner(){
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}