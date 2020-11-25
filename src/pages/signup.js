import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';
import { HomeHeader } from '../containers';
import { Form, Aside } from '../components';
import { BrandIcon } from '../components/icons';
import * as ROUTES from '../constants/routes'; 
import { Spinner } from '../components/loading';
import { SignUpSuccessful } from '../components/request-success'; 
import { useHistory } from 'react-router';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  const handleSignup = e => {
    e.preventDefault();
    setIsLoading(true);

    firebase 
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => result.user.updateProfile(
          { displayName: fullName }
        ) 
        .then(() => {
          setSuccess(true);
          setError(false);
          setIsLoading(false);
        })
      )
      .catch(error => {
        console.log(error.message);
        setFullName('');
        setEmail('');
        setPassword('');
        setError(error.message);
        setIsLoading(false);
        setSuccess(false);
      })
  } 

  useEffect(() => {
    if(success) {
      setTimeout(() =>{
        setSuccess(false);
        history.push(ROUTES.DASHBOARD);
      }, 1500);
    }
  }, [success]);

  return (
    <>
      <HomeHeader />
      <div className="sign-up">
        <img src="./images/sign-up-bg.svg" className="bg-img" alt=''/>
        <Form id="sign-up" onSubmit={handleSignup} marginLeft="5%">
          <Form.Title>Create Account</Form.Title>
          <Form.Text>Register your account!</Form.Text>
          {error && <Form.Error fontSize='1.05rem'>{error}</Form.Error>}
          <Form.Group>
            <Form.Label htmlFor="full-name">Full name</Form.Label>
            <Form.Input 
              type="text" 
              value={fullName} 
              id="full-name"
              onChange = {({target}) => setFullName(target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input 
              type="email" 
              value={email} 
              id="email"
              onChange = {({target}) => setEmail(target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input 
              type="password" 
              value={password} 
              id="password"
              onChange = {({target}) => setPassword(target.value)}
            />
            <Form.Text type='note'>Password should be from 6 to 12 characters.</Form.Text>
          </Form.Group>
          <Form.Button 
            form="sign-up" 
            type="submit" 
            disabled = {isLoading}
          >
            {isLoading ? <Spinner /> : 'Sign Up'}
          </Form.Button>
        </Form>
        <div className="alt">
          <p>Create account with:</p>
          <div>
            <BrandIcon src='./icons/brands/google.svg'/>
            <BrandIcon src='./icons/brands/linkedIn.svg'/>
            <BrandIcon src='./icons/brands/facebook.svg'/>
          </div>
        </div>
        <Form.Text showOnlyOnSmallView>Already have an account? <Form.Link to={ROUTES.SIGN_IN}>Log in</Form.Link></Form.Text>
      </div>
      <Aside>
        <Aside.Group>
          <Aside.Text>Already have an account?</Aside.Text>
          <Aside.Button href={ROUTES.SIGN_IN}>Log In</Aside.Button>
        </Aside.Group>
        <Aside.Image src="./images/sign-up-aside.svg"/>
      </Aside>
      {success && <SignUpSuccessful />}
    </>
  )
}