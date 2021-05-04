import React from "react";

import { Container, Heading, Image, Steps, Step, Title, Text, Indicator, Group } from './styles/how-it-works';

export default function HowItWorks({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>
}

HowItWorks.Heading = function HowItWorksHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}

HowItWorks.Image = function HowItWorksImage({ dataSrc, ...restProps }) {
  return <Image src="" data-src={dataSrc} {...restProps} alt=''/>
}

HowItWorks.Steps = function HowItWorksSteps({ children, ...restProps }) {
  return <Steps {...restProps}>{children}</Steps>
}

HowItWorks.Step = function HowItWorksStep({ children, ...restProps }) {
  return <Step {...restProps}>{children}</Step>
}

HowItWorks.Title = function HowItWorksTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

HowItWorks.Group = function HowItWorksGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}


HowItWorks.Text = function HowItWorksText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

HowItWorks.Indicator = function HowItWorksIndicator({ children, ...restProps }) {
  return <Indicator {...restProps}>{children}</Indicator>
}
