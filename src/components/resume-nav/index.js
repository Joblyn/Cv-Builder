import React from 'react';
import { Container, Item, Icon, Text, Image, Overlay, Base, LockBody } from './styles/resume-nav';
 
export default function ResumeNav({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

ResumeNav.Overlay = function  ResumeNavOverlay({ children,...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>
} 

ResumeNav.Base = function  ResumeNavBase({ children,...restProps }) {
  return <Base {...restProps}>{children}</Base>
} 

ResumeNav.Item = function ResumeNavItem({ children,...restProps }) {
  return <Item {...restProps}>{children}</Item>
}  

ResumeNav.Image = function  ResumeNavImage({ src, ...restProps }) {
  return <Image {...restProps} src={src}/>
}  

ResumeNav.Icon = function  ResumeNavIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>
}

ResumeNav.Text = function  ResumeNavText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}  

ResumeNav.LockBody = function ResumeNavLockBody() {
  return <LockBody /> 
}
