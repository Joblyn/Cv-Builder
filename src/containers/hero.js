import React from 'react';
import { Hero } from '../components';
import * as ROUTES from '../constants/routes';
export default function HeroContainer({ user }){

  return(
    <Hero className="col-12">
      <Hero.Left className="col-md-6 col-lg-6 col-sm-12">
        <Hero.Caption>
          Create a mind blowing resume
        </Hero.Caption>
        <Hero.Text>
        Design and build a unique CV that your dream job will notice.
        </Hero.Text>
        <Hero.Button href={user ? ROUTES.RESUME : ROUTES.SIGN_IN}>Build your resume</Hero.Button>
      </Hero.Left>
      <Hero.Right className="col-md-6 col-lg-6 col-sm-12">
        <Hero.Image src="./images/hero.svg"/>
      </Hero.Right>
    </Hero>
  )
};