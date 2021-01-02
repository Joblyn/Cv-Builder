import React from 'react';
import { Form } from "../components";

export default function Languages() {
  return (
    <Form type="resume" id="langs" style={{minHeight:'90vh'}}>
      <Form.Title type="resume" showOnlyOnSmallViewPort>Languages</Form.Title>
      <Form.Group type="resume">
        <Form.Label>Languages(%)</Form.Label>
        <Form.TextArea 
          id="languages"
          placeholder=""
          height="12rem"
          typ="resume"
        />
      </Form.Group>
    </Form> 
  )
};