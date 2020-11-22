import React from 'react';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Container, Image, Icon, Notice, Text, Link, Overlay } from './styles/request-success';

export default function RequestSuccessful({ setIsSent, isSent, ...restProps }) {
  return (
    <Overlay isSent={isSent} {...restProps}>
      <Container>
        <Image src="./images/request-success.svg" alt=''/>
        <Icon icon={faTimes} type="times" onClick={() => setIsSent(false)}/>
        <Icon icon={faCheckCircle} type="check-circle"/>
        <Notice>Your request has been received</Notice>
        <Text>One of our customer service agents will get back to you as soon as possible. You can always refer to our <Link to="#">FAQ & Help</Link> section here for instant help</Text>
      </Container>
    </Overlay>
  )
}