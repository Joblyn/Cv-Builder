import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../constants/actionsTypes";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { updateResumeData } from "../actions/actions";

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const personalInfo = useSelector(state => state.resumeData.personalInfo);

  const handleChange = ({ target }) => {
    dispatch(updateResumeData("personalInfo", target, Actions.PERS_INFO));
  };

  return (
    <Form type="resume" id="personal-info">
      <Form.Title type="resume" showOnlyOnSmallViewPort>
        Personal Information
      </Form.Title>
      <Form.Group row>
        <Form.Group type="resume" width="45%" marginRight="10%">
          <Form.Label htmlFor="firstname">First name</Form.Label>
          <Form.Input
            id="firstname"
            type="text"
            placeholder="e.g John"
            typ="resume"
            name="firstName"
            defaultValue={personalInfo.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group width="45%">
          <Form.Label htmlFor="lastname">Last name</Form.Label>
          <Form.Input
            id="lastname"
            type="text"
            placeholder="e.g Doe"
            typ="resume"
            name="lastName"
            defaultValue={personalInfo.lastName}
            onChange={handleChange}
          />
        </Form.Group>
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="jobTitle">Job Title</Form.Label>
        <Form.Input
          id="jobTitle"
          type="text"
          placeholder="e.g Software Developer"
          typ="resume"
          name="jobTitle"
          defaultValue={personalInfo.jobTitle}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Input
          id="email"
          type="email"
          placeholder="e.g example@gmail.com"
          typ="resume"
          name="email"
          defaultValue={personalInfo.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="phoneNo">Phone Number</Form.Label>
        <Form.Input
          id="phoneNo"
          type="text"
          placeholder="080 000 0000"
          typ="resume"
          name="phoneNumber"
          defaultValue={personalInfo.phoneNumber}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="location">Location</Form.Label>
        <Form.Input
          id="location"
          type="text"
          placeholder="e.g Lagos, Nigeria"
          typ="resume"
          name="location"
          defaultValue={personalInfo.location}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="twitter">Twitter Username</Form.Label>
        <Form.Input
          id="twitter"
          type="text"
          placeholder="e.g @johnDoe"
          typ="resume"
          name="twitter"
          defaultValue={personalInfo.twitter}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="facebook">Facebook Username</Form.Label>
        <Form.Input
          id="facebook"
          type="text"
          placeholder="e.g John Doe"
          typ="resume"
          name="facebook"
          defaultValue={personalInfo.facebook}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="linkedIn">LinkedIn Username</Form.Label>
        <Form.Input
          id="linkedIn"
          type="text"
          placeholder="e.g John Doe"
          typ="resume"
          name="linkedIn"
          defaultValue={personalInfo.linkedIn}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group type="resume">
        <Form.Label htmlFor="info">Professional statement</Form.Label>
        <Form.TextArea 
          id="info" 
          placeholder="" 
          height="10rem" 
          typ="resume"
          name="otherInfo"
          defaultValue={personalInfo.otherInfo}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Button
        type="submit"
        position="right"
        typ="resume"
        href={ROUTES.EDU}
      >
        Next Section
      </Form.Button>
    </Form>
  );
}
