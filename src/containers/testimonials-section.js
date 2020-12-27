import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Testimonials } from '../components';
import testimonials from '../fixtures/testimonials.json';
import * as ROUTES from '../constants/routes';

export default function TestimonialsSection({ user }){
  return (
    <>
      <Testimonials>
        <Testimonials.Background />
        <Testimonials.Heading>Some words from our awesome clients</Testimonials.Heading>
        <Carousel>
          {testimonials.map(client => (
            <Carousel.Item iterval={2000} key={client.id}>
              <Testimonials.Inner>
                <Testimonials.Text>{client.testimony}</Testimonials.Text>
                <Testimonials.Image src={client.img} alt={`testimony-${client.id}`}/>
              </Testimonials.Inner>
              <Testimonials.Name className="text-center">{client.name}</Testimonials.Name>
              <Testimonials.Profession className="text-center">{client.job}</Testimonials.Profession>
            </Carousel.Item>
          ))
          }
        </Carousel>
        <Testimonials.Button href={user ? ROUTES.RESUME : ROUTES.SIGN_IN}>Build your resume</Testimonials.Button>
      </Testimonials>
    </>
  )
}