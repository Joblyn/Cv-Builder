import React from 'react';
import { Container, Heading, Button, Inner, Image, Name, Profession, Text, Background } from './styles/testimonials';

export default function Testimonials({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

Testimonials.Background = function TestimonialBackground({...restProps }){
  return <Background {...restProps} src="./images/testimonials-bg.svg" />
}

Testimonials.Heading = function TestimonialHeading({ children, ...restProps }){
  return <Heading {...restProps}>{children}</Heading>
}

Testimonials.Inner = function TestimonialInner({ children, ...restProps }){
  return <Inner {...restProps}>{children}</Inner>
}

Testimonials.Text = function TestimonialText({ children, ...restProps }){
  return <Text {...restProps}>{children}</Text>
}

Testimonials.Image = function TestimonialImage({ src, ...restProps }){
  return <Image {...restProps} src={src} alt=''/>
}

Testimonials.Profession = function TestimonialProfession({ children, ...restProps }){
  return <Profession {...restProps}>{children}</Profession>
}

Testimonials.Name = function TestimonialName({ children, ...restProps }){
  return <Name {...restProps}>{children}</Name>
}


Testimonials.Button = function TestimonialButton({ children, ...restProps }){
  return <Button {...restProps}>{children}</Button>
}