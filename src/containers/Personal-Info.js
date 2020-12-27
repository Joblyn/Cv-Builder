import React from 'react';
import { Form } from '../components';

export default function PersonalInfo() {
  return (
    <Form type="resume">
      <Form.Group row>
        <Form.Group type="resume">
          <Form.Label htmlFor="firstname">
            First name
          </Form.Label>
          <Form.Input 
            id="firstname"
            type="text"
            placeholder='e.g John'
            typ="resume"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="lastname">
            Last name
          </Form.Label>
          <Form.Input 
            id="lastname"
            type="text"
            placeholder="e.g Doe"
            typ="resume"
          />
        </Form.Group>
      </Form.Group>
      
    </Form>
  )
};