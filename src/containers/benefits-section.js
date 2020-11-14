import React from "react";
import benefits from "../fixtures/benefits";
import { Benefits } from '../components';
import * as ROUTES from '../constants/routes';

export default function BenefitsSection() {
  return (
    <Benefits className="row d-flex justify-content-center">
      <Benefits.Heading className="text-center col-12">Some of our benefits</Benefits.Heading>
      {benefits.map(benefit => (
        <Benefits.Item className="col-md-4 col-sm-12 col-lg-4 text-center" key={benefit.id}>
          <Benefits.Icon src={benefit.icon}/>
          <Benefits.Title>{benefit.title}</Benefits.Title>
          <Benefits.Text>{benefit.text}</Benefits.Text>
        </Benefits.Item>
      ))
      }
      <Benefits.Button href={ROUTES.SIGN_IN}>Build your resume</Benefits.Button>
    </Benefits>
  )
}