import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import $ from "jquery";
import { ResumeHeader } from '../containers';
import { ResumeNav } from '../components';
import items from '../fixtures/resume.json';

export default function Resume({ children }) {
  const location = window.location.pathname;
  const [showNav, setShowNav] = useState(false);

  const resumeNav = $('#resume-nav');
  // const arrRight = $('#arr-right');
  $('body').click(event => {
    let target = event.target;
    if (target !== resumeNav) {
      if(showNav) {
        setShowNav(false);
      }
    }
  });

  // const swipeController = (body, callback) => {
  //   let dir, 
  //   swipeType, 
  //   startX,  
  //   startY,  
  //   distX,  
  //   distY,  
  //   threshold = 50,
  //   maxDist = 200,
  //   restraint = 100, // maximum distance allowed at the same time in perpendicular direction
  //   startTime,  
  //   allowedTime = 800,  
  //   elapsedTime  

  //   document.addEventListener('touchstart', function(e){
  //     let touchObj = e.touches[0];
  //     dir = 'none';
  //     swipeType = 'none';
  //     distX = 0;
  //     distY = 0;
  //     startX = touchObj.pageX;
  //     startY = touchObj.pageY;
  //     startTime = new Date().getTime();

  //     // let target = e.target;
  //     // if(showNav) {
  //     //   if (target !== resumeNav) {
  //     //     setShowNav(false);
  //     //   } 
  //     // } else {
  //     //   if (target === arrRight) {
  //     //     setShowNav(true);
  //     //   }
  //     // }
  //   }, false);

  //   document.addEventListener('touchmove', function(e){
  //     let touchObj = e.touches[0];
  //     distX = touchObj.pageX - startX; //get dist in x dir
  //     distY = touchObj.pageY - startY; //get dist in y dir
  //     if (Math.abs(distX) > Math.abs(distY)) {
  //       dir = (distX < 0) ? 'left' : 'right';
  //     }
  //   }, false);

  //   document.addEventListener('touchend', function(e){
  //     let touchObj = e.touches[0];
  //     elapsedTime = new Date().getTime() - startTime;
  //     if (elapsedTime <= allowedTime) {
  //       if (maxDist >= Math.abs(distX) && Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
  //         swipeType = dir;
  //       }
  //     }
  //     callback(swipeType);
  //     e.preventDefault();
  //   }, false);
  // };

  // const body = document.querySelector('body');
  // const showSideNav = (swipeType) => {
  //   if (swipeType === 'right') {
  //     setShowNav(true);
  //   }
  // };
  // swipeController(body, showSideNav);

  const activeStyle = {
    background: '#216DE0',
    color: '#fff',
    boxShadow: '0px 0px 10px rgba(33,109,224,0.3)'
  };

  return <>
    <ResumeHeader />
    <div className="resume" id="resume">
      <ResumeNav.Icon type='left' id="arr-right" onClick={() => setShowNav(true)}><BsArrowRight /></ResumeNav.Icon>
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