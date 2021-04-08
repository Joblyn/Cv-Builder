import React from 'react';
import { Footer } from '../components';
import * as ROUTES from '../constants/routes';

export default function FooterContainer({ ...restProps }){
  return (
    <Footer {...restProps}>
      <Footer.Row className="p-2 pt-5">
        <Footer.Column className="col-md-4 col-lg-4 col-sm-12">
          <Footer.Brand />
          <Footer.Text className="p-2">Design and build a unique CV that your dream job will notice.</Footer.Text>
        </Footer.Column>
        <Footer.Column className="col-md-2 col-lg-2 col-sm-12">
          <Footer.Text>Quick links</Footer.Text>
          <Footer.Content>
            <Footer.Link to={ROUTES.HOME}>Home</Footer.Link>
            <Footer.Link to={ROUTES.ABOUT}>About</Footer.Link>
            <Footer.Link to={ROUTES.CONTACT}>Contact</Footer.Link>
          </Footer.Content>
        </Footer.Column>
        <Footer.Column className="col-md-4 col-lg-4 col-sm-12">
          <Footer.Text>Contact Us</Footer.Text>
          <Footer.Content>
            <Footer.Link to="#">
            Office Address:
            24 Lekki Street Lagos, Nigeria
            </Footer.Link>
            <Footer.Link to="#">Call: 081 - 3676 - 7175</Footer.Link>
            <Footer.Link to="#">Email: hello@resumebuilder.com</Footer.Link>
          </Footer.Content>
        </Footer.Column>
        <Footer.Column className="col-md-2 col-lg-2 col-sm-12">
        <Footer.Text>Follow Us</Footer.Text>
          <Footer.Content>
            <Footer.Link to="#">Twitter</Footer.Link>
            <Footer.Link to="#">Instagram</Footer.Link>
            <Footer.Link to="#">Facebook</Footer.Link>
            <Footer.Link to="#">LinkedIn</Footer.Link>
          </Footer.Content>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  )
}