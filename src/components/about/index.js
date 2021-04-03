import React from "react";
import {
  Container,
  Heading,
  Title,
  Content,
  Image,
  Inner,
  Text,
  Break,
  Group,
  Team,
  Member,
  Name,
  Portrait,
} from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Heading = function AboutHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

About.Content = function AboutContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

About.Inner = function AboutInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

About.Text = function AboutText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.Group = function AboutGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

About.Team = function AboutTeam({ children, ...restProps }) {
  return <Team {...restProps}>{children}</Team>;
};

About.Member = function AboutMember({ children, ...restProps }) {
  return <Member {...restProps}>{children}</Member>;
};

About.Name = function AboutName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

About.Image = function AboutImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} alt="" />;
};

About.Break = function AboutBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

About.Portrait = function AboutPortrait({ src, ...restProps }) {
  return (
    <div style={{borderRadius: '50%'}}>
      <Portrait src={src} {...restProps} />
    </div>
  );
};
