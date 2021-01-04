import React, { useState, useContext, useEffect } from 'react';
import { IoMdEye } from 'react-icons/io';
import { AiOutlineDownload } from 'react-icons/ai';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';

export default function ResumeHeader({ user }){
  const { firebase } = useContext(FirebaseContext);
  const [active, setActive] = useState(false);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);

  return (
      <Header bg="blue" expand="md">
      <Header.Brand to={ROUTES.HOME} type="dashboard"/>
      <Header.Toggle aria-controls="basic-navbar-nav"/>   
      <Header.Collapse id="basic-navbar-nav">
        <Header.Group>
          <Header.TextLink type="header" to="#">
            <Header.Icon><IoMdEye /></Header.Icon>
            Preview Resume
          </Header.TextLink>
          <Header.TextLink type="header" to="#">
            <Header.Icon><AiOutlineDownload /></Header.Icon>
            Download
          </Header.TextLink>
          
          <Header.User displayName={displayName} 
            onClick={() => setActive(active => !active)}
          /> 
          <Header.UserNav active = {active}>
            <Header.Item>
              <Header.TextLink to={ROUTES.PERS_INFO} type="user">Build Resume</Header.TextLink>
            </Header.Item>
            <Header.Item>
              <Header.TextLink onClick={() => firebase.auth().signOut()} to='#' type="user">Log out</Header.TextLink>
            </Header.Item>
          </Header.UserNav>
        </Header.Group>
      </Header.Collapse> 
    </Header>
  ); 
}