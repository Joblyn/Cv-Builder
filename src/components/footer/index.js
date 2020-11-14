import React from 'react';
import { Container, Brand, Row, Column, Link, Text, Content } from './styles/footer';

export default function Footer({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

Footer.Brand = function FooterBrand({ children, ...restProps}) {
  return <Brand {...restProps}>Resume Builder</Brand>
};

Footer.Row = function FooterRow({ children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
};

Footer.Column = function FooterColumn({ children, ...restProps}) {
  return <Column {...restProps}>{children}</Column>
};

Footer.Link = function FooterLink({ children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
};

Footer.Text = function FooterText({ children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
};

Footer.Content = function FooterContent({ children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>
};