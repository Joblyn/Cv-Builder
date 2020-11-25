import React, { useState, useContext } from 'react';
import { IoMdEye } from 'react-icons/io';
import { AiOutlineDownload } from 'react-icons/ai';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { Spinner } from '../components/loading';

export default function DashboardHeader(){
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {}; 

  const [active, setActive] = useState(false);


  return (
    <Header bg="blue" expand="md">
      <Header.Brand to={ROUTES.HOME} type="dashboard"/>
      <Header.Toggle aria-controls="basic-navbar-nav"/>   
      <Header.Collapse id="basic-navbar-nav">
        <Header.Group>
          <Header.TextLink type="header">
            <Header.Icon><IoMdEye /></Header.Icon>
            Preview Resume
          </Header.TextLink>
          <Header.TextLink type="header">
            <Header.Icon><AiOutlineDownload /></Header.Icon>
            Download
          </Header.TextLink>
          
          {user.displayName ? 
          <Header.User displayName={user.displayName} 
            onClick={() => setActive(active => !active)}
          /> : <Spinner />}
          <Header.UserNav active = {active}>
            <Header.Item>
              <Header.TextLink to={ROUTES.DASHBOARD} type="user">Dashboard</Header.TextLink>
            </Header.Item>
            <Header.Item>
              <Header.TextLink onClick={() => firebase.auth().signOut()} to='#' type="user">Log out</Header.TextLink>
            </Header.Item>
          </Header.UserNav>
        </Header.Group>
      </Header.Collapse> 
    </Header>
  )
}