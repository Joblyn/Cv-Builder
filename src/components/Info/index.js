import React from 'react';
import { Container, Heading, Text, Image, Contact, Group } from './styles/info';

export default function Info({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Info.Heading = function InfoHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}

Info.Text = function InfoText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Info.Icon = function InfoIcon({ children, ...restProps }) {
  return <Image {...restProps} alt=''/>
}

Info.Contact = function InfoContact({ children, ...restProps }) {
  return <Contact {...restProps}>{children}</Contact>
}

Info.Group = function InfoGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}