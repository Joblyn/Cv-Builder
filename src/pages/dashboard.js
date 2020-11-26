import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { DashboardHeader } from '../containers';
import { ResumeNav } from '../components';
import items from '../fixtures/resume.json';

export default function Dashboard(){
  const location = window.location.pathname;
  const activeStyle = {
    background: '#216DE0',
    color: '#fff',
    boxShadow: '0px 0px 10px rgba(33,109,224,0.3)'
  }

  return <>
    <DashboardHeader />
    <div className="resume">
      <ResumeNav.Icon><BsArrowRight /></ResumeNav.Icon>
      <ResumeNav>
        <ResumeNav.Icon><BsArrowLeft /></ResumeNav.Icon>
        {items.map(item => (
          <ResumeNav.Item to={item.to} activeStyle={activeStyle} key={item.id}>
            <ResumeNav.Image src={location===item.to ? item.iconActive : item.icon}/>
            <ResumeNav.Text>{item.title}</ResumeNav.Text>
          </ResumeNav.Item>
        ))}
      </ResumeNav>
      <Router>
        <Switch>

        </Switch>
      </Router>
    </div>
  </>
}