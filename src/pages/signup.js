import React from 'react';
import { HomeHeader } from '../containers';
import { Form, Aside } from '../components';
import * as ROUTES from '../constants/routes'; 

export default function SignUp() {

  return (
    <>
      <HomeHeader />
      <div className="sign-up">
        <img src="./images/sign-up-bg.svg" className="bg-img"/>
        <Form id="sign-up" marginLeft='5%'>
          <Form.Title>Create Account</Form.Title>
          <Form.Text>Register your account!</Form.Text>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full name</Form.Label>
            <Form.Input type="text" value="" id="full-name"/>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input type="email" value="" id="email"/>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Full name</Form.Label>
            <Form.Input type="password" value="" id="password"/>
            <Form.Text type='note'>Password should be from 6 to 12 characters.</Form.Text>
          </Form.Group>
          <Form.Button form="sign-up" type="submit">Sign Up</Form.Button>
        </Form>
        <Form.Text></Form.Text>
      </div>
      <Aside>
        <Aside.Group>
          <Aside.Text>Already have an account?</Aside.Text>
          <Aside.Button to={ROUTES.SIGN_IN}>Log In</Aside.Button>
        </Aside.Group>
        <Aside.Image src="./images/sign-up-aside.svg"/>
      </Aside>
    </>
  )
}