import React from 'react';
import { Footer } from '../components';
import * as ROUTES from '../constants/routes';

export default function FooterContainer(){
  return (
    <Footer>
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
            <Footer.Link>
            Office Address:
            24 Lekki Street Lagos, Nigeria
            </Footer.Link>
            <Footer.Link>Call: 090 - 000 - 0000</Footer.Link>
            <Footer.Link>Email: hello@resumebuilder.com</Footer.Link>
          </Footer.Content>
        </Footer.Column>
        <Footer.Column className="col-md-2 col-lg-2 col-sm-12">
        <Footer.Text>Follow Us</Footer.Text>
          <Footer.Content>
            <Footer.Link>Twitter</Footer.Link>
            <Footer.Link>Instagram</Footer.Link>
            <Footer.Link>Facebook</Footer.Link>
            <Footer.Link>LinkedIn</Footer.Link>
          </Footer.Content>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  )
}