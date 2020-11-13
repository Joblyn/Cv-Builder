import React from "react";
import { HowItWorks } from "../components";
import steps from '../fixtures/how-it-works.json'; 

export default function HowItWorksSection() {
  return (
    <HowItWorks className="d-flex flex-column row">
      <HowItWorks.Heading className="text-center col-12">How it works</HowItWorks.Heading>
      <HowItWorks.Group className="row">
        <HowItWorks.Image src="./images/how-it-works.svg" className="col-md-8 col-lg-8 col-sm-12"/> 
        <HowItWorks.Steps className="col-lg-4 col-md-4 col-sm-12">
          {steps.map(step =>(
            <HowItWorks.Step key={step.id} className="row">
              <HowItWorks.Indicator className="col-2">{`0${step.id}`}</HowItWorks.Indicator>
              <HowItWorks.Group className="col-10">
                <HowItWorks.Title>{step.title}</HowItWorks.Title>
                <HowItWorks.Text>{step.text}</HowItWorks.Text>
              </HowItWorks.Group>
            </HowItWorks.Step>
          ))
          }
        </HowItWorks.Steps>
      </HowItWorks.Group>
    </HowItWorks>
  )
}