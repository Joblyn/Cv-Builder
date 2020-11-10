import React from 'react';
import * as ROUTES from '../constants/routes';

import { Header } from '../components';

export default function HomeHeader(){
  return (
    <Header>
      <Header.Logo />
      <Header.Group>
        <Header.Link to={ROUTES.HOME}>Home</Header.Link>
        <Header.Link to={ROUTES.ABOUT}>About</Header.Link>
        <Header.Link to={ROUTES.CONTACT}>Contact</Header.Link>
        <Header.Button to={ROUTES.SIGN_IN}>Get Started</Header.Button>
      </Header.Group>
    </Header>
  )
}