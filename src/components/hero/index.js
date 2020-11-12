import React from 'react';
import { Container, Left, Caption, Text, Button, Right, Image } from './styles/hero';

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Hero.Left = function HeroLeft({ children, ...restProps}){
  return <Left {...restProps}>{children}</Left>
}

Hero.Caption =function HeroCaption({ children, ...restProps }) {
  return <Caption {...restProps}>{children}</Caption>
}

Hero.Text =function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Hero.Button =function HeroButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

Hero.Right =function HeroRight({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>
}

Hero.Image =function HeroImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />
}
