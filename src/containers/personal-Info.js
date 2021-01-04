import React from "react";
import { Form } from "../components"; 
import * as ROUTES from '../constants/routes';

export default function PersonalInfo() {
  return (
    <Form type="resume" id="personal-info">
      <Form.Title type="resume" showOnlyOnSmallViewPort>Personal Information</Form.Title>
      <Form.Group row>
        <Form.Group type="resume" width="45%" marginRight="10%">
          <Form.Label htmlFor="firstname">First name</Form.Label>
          <Form.Input
            id="firstname"
            type="text"
            placeholder="e.g John"
            typ="resume"
          />
        </Form.Group>
        <Form.Group width="45%">
          <Form.Label htmlFor="lastname">Last name</Form.Label>
          <Form.Input
            id="lastname"
            type="text"
            placeholder="e.g Doe"
            typ="resume"
          />
        </Form.Group>
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Input
          id="email"
          type="email"
          placeholder="e.g example@gmail.com"
          typ="resume"
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="phoneNo">Phone Number</Form.Label>
        <Form.Input 
          id="phoneNo" 
          type="text" 
          placeholder="080 000 0000"
          typ="resume"
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="location">Location</Form.Label>
        <Form.Input 
          id="location" 
          type="text" 
          placeholder="e.g Lagos Nigeria"
          typ="resume"
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="info">Other Information</Form.Label>
        <Form.TextArea 
          id="info" 
          placeholde=""
          height="12rem"
          typ="resume"
        />
      </Form.Group>
      <Form.Button
        type="submit"
        form="personal-info"
        position="right"
        typ="resume"
        href={ROUTES.EDU}
      >
        Next Section
      </Form.Button>
    </Form>
  );
};
