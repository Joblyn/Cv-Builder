import React, { useState } from 'react';

import * as ROUTES from '../constants/routes';
import { Header } from '../components';


export default function HomeHeader(){
  const location = window.location.pathname;

  return (
    <>
      <Header expand="lg">
        <Header.Brand to={ROUTES.HOME}/>
        <Header.Toggle aria-controls="basic-navbar-nav"/>
        <Header.Collapse id="basic-navbar-nav">
          <Header.Group>
            <Header.Link 
              active={location === ROUTES.HOME ? 'true' : 'false'} 
              to={ROUTES.HOME}
              >
              Home
            </Header.Link>
            <Header.Link 
              active={location === ROUTES.ABOUT ? 'true' : 'false'} 
              to={ROUTES.ABOUT}
              >
              About
            </Header.Link>
            <Header.Link 
              active={location === ROUTES.CONTACT ? 'true' : 'false'} 
              to={ROUTES.CONTACT}>
              Contact
            </Header.Link>
            <Header.NavButton to={ROUTES.SIGN_IN}>Get Started</Header.NavButton>
          </Header.Group>
        </Header.Collapse>
      </Header>
    </>
  )
}