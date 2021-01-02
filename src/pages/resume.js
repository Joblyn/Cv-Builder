import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import $ from "jquery";
import { ResumeHeader } from '../containers';
import { ResumeNav } from '../components';
import items from '../fixtures/resume.json';

export default function Resume({ children }) {
  const location = window.location.pathname;
  const [showNav, setShowNav] = useState(false);

  let resumeNav = $('#resume-nav');
  $('body').click(event => {
    let target = event.target;
    if (target !== resumeNav) {
      if(showNav) {
        setShowNav(false);
      }
    }
  })

  const activeStyle = {
    background: '#216DE0',
    color: '#fff',
    boxShadow: '0px 0px 10px rgba(33,109,224,0.3)'
  }

  return <>
    <ResumeHeader />
    <div className="resume">
      <ResumeNav.Icon type='left' onClick={() => setShowNav(true)}><BsArrowRight /></ResumeNav.Icon>
      {<ResumeNav.Overlay showNav={showNav}/>}
      {showNav && <ResumeNav.LockBody />}
      <ResumeNav.Base id="resume-nav" showNav={showNav}>
        <ResumeNav>
          {items.map(item => (
            <ResumeNav.Item to={item.to} activeStyle={activeStyle} key={item.id}>
              <ResumeNav.Image src={location===item.to ? item.iconActive : item.icon}/>
              <ResumeNav.Text>{item.title}</ResumeNav.Text>
            </ResumeNav.Item>
          ))}
        </ResumeNav>
      </ResumeNav.Base>
      <div className="resume-form-cont">
        {children}
      </div>
    </div>
  </>
}