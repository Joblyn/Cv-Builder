import React from 'react';

import { Container, Item, Icon, Title, Text, Button, Heading } from './styles/benefits';

export default function Benefits({ children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Benefits.Heading = function BenefitsHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}

Benefits.Item = function BenefitsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Benefits.Icon = function BenefitsIcon({ src, ...restProps }) {
  return <Icon {...restProps} src={src}/>
}

Benefits.Title = function BenefitsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Benefits.Text = function BenefitsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Benefits.Button = function BenefitsButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}