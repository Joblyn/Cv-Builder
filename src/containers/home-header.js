import React, { useState, useContext } from 'react';

import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { Header } from '../components';

export default function HomeHeader(){
  const location = window.location.pathname;
  const { firebase } = useContext(FirebaseContext);
  const [active, setActive] = useState(false);
  const user = firebase.auth().currentUser; 

  return (
    <>
      <Header expand="lg">
        <Header.Brand to={ROUTES.HOME}/>
        {(location === ROUTES.SIGN_IN || location === ROUTES.SIGN_UP) ?
         null :
        <>
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
              {user ?  
                <>
                  <Header.User displayName={user.displayName} 
                    onClick={() => setActive(active => !active)}
                  />  
                  <Header.UserNav active = {active} >
                    <Header.Item>
                      <Header.TextLink to={ROUTES.PERS_INFO} type="user">Build Resume</Header.TextLink>
                    </Header.Item>
                    <Header.Item>
                      <Header.TextLink onClick={() => firebase.auth().signOut()} to='#' type="user">Log out</Header.TextLink>
                    </Header.Item>
                  </Header.UserNav>
                </> 
                : <Header.NavButton href={ROUTES.SIGN_UP}>Get Started</Header.NavButton>
              } 
            </Header.Group>
          </Header.Collapse>
        </>}
      </Header>
    </>
  )
}