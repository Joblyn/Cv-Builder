import React from 'react';
import { Container, Wrap, BounceBall, Text, LockBody } from './styles/loading';

export default function Loading() {
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
