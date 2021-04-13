import React from "react";
import ProgressiveImage from "react-progressive-image";
import { About } from "../components";

export default function AboutContainer() {
  return (
    <>
      <About.Heading>About Us</About.Heading>
      <About className="d-flex flex-wrap w-100">
        <About.Inner
          className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column py-3 pl-5"
          paddingRight="5rem!important"
          style={{ marginBottom: "10rem" }}
        >
          <About.Group className="py-3 text-left">
            <About.Title>Who We Are</About.Title>
            <About.Content>
              <About.Text>
                We create functional resume structure that allows for the
                candidate to focus heavily on the skills and abilities that he
                or she can bring to the new role.
              </About.Text>
              <About.Text>
                It is a highly useful tool for jobseekers looking to change
                careers or those who have little or no work experience such as
                students or even for some entry-level.
              </About.Text>
            </About.Content>
          </About.Group>
          <About.Group className="py-3 text-left">
            <About.Title>Why Choose Us</About.Title>
            <About.Content>
              <About.Text>
                We create functional resume structure that allows for the
                candidate to focus heavily on the skills and abilities that he
                or she can bring to the new role.
              </About.Text>
              <About.Text>
                It is a highly useful tool for jobseekers looking to change
                careers or those who have little or no work experience such as
                students or even for some entry-level.
              </About.Text>
            </About.Content>
          </About.Group>
        </About.Inner>
        <About.Inner className="py-3 col-lg-6 col-md-6 col-sm-12 progressive">
          <ProgressiveImage src="./images/about.svg" placeholder="">
            {src => <About.Image src={src} alt="" />}
          </ProgressiveImage>
        </About.Inner>
        {/* <About.Inner className="px-3 my-4 col-12" marginTop="6rem">
          <About.Title className="text-center my-5 col-12" marginTop=".5rem">Developer</About.Title>
          <About.Team className="col-12 px-5 py-4 text-center d-flex align-items-center justify-content-center">
            <About.Member className="col-lg-3 col-md-3 col-sm-12">
              <About.Portrait src="./images/team-1.svg"/>
              <About.Name>Olowookere Emmanuel</About.Name>
            </About.Member>
            <About.Member className="col-lg-3 col-md-3 col-sm-12">
              <About.Portrait src="./images/team-2.svg"/>
              <About.Name>Ifedubem Ezike</About.Name>
            </About.Member>
            <About.Member className="col-lg-3 col-md-3 col-sm-12">
              <About.Portrait src="./images/profile.jpg"/>
              <About.Name>Job Oaikhenah</About.Name>
            </About.Member>
            <About.Member className="col-lg-3 col-md-3 col-sm-12">
              <About.Portrait src="./images/team-4.svg"/>
              <About.Name>Raffia city hub</About.Name>
            </About.Member>
          </About.Team>
        </About.Inner> */}
      </About>
    </>
  );
}
