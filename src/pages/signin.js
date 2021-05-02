import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import ProgressiveImage from "react-progressive-image";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { FirebaseContext } from "../context/firebase";
import { HomeHeader } from '../containers';
import { Form, Aside } from "../components";
// import { BrandIcon } from "../components/icons";
import * as ROUTES from "../constants/routes";
import { Spinner } from "../components/loading";
import { ForgotPasswordPopup } from "../components/request-success";
// import { provider } from '../lib/firebase.prod';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [resetPasswordPopup, setResetPasswordPopupsetPopUp] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.PERS_INFO);
      })
      .catch((error) => {
        console.log(error.message);
        setEmail("");
        setPassword("");
        setError(error.message);
        setIsLoading(false);
      });
  };

  // const googleSignIn = () => {
  //   var provider = new firebase.auth.GoogleAuthProvider();
      
  //     firebase.auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       /** @type {firebase.auth.OAuthCredential} */
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // };
  // console.log(googleSignIn); 

  return (
    <>
      <HomeHeader />
      <div className="sign-up">
        <ProgressiveImage
          src="./images/sign-up-bg.svg"
          placeholder="./images/sign-up-bg.svg"
        >
          {(src, loading) => (
            <img
              src={src}
              style={{ opacity: loading ? 0.5 : 1 }}
              className="bg-img"
              alt=""
            />
          )}
        </ProgressiveImage>
        <Form id="sign-in" onSubmit={handleSignIn} marginLeft="5%">
          <Form.Title>Welcome back!</Form.Title>
          <Form.Text>Login to continue!</Form.Text>
          {error && <Form.Error fontSize="1.05rem">{error}</Form.Error>}
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input
              type="email"
              value={email}
              id="email"
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input
              type="password"
              value={password}
              id="password"
              onChange={({ target }) => setPassword(target.value)}
              required
            />
          </Form.Group>
          <Form.Text style={{textAlign: 'right', marginTop: '1.2rem'}}>
            <Form.Link onClick={() => setResetPasswordPopupsetPopUp(true)}>Forgot password?</Form.Link>
          </Form.Text>
          <Form.Button form="sign-in" type="submit" disabled={isLoading} style={{ marginTop: '3rem'}}>
            {isLoading ? <Spinner /> : "Log In"}
          </Form.Button>
        </Form>
        {resetPasswordPopup && <ForgotPasswordPopup setResetPasswordPopupsetPopUp={setResetPasswordPopupsetPopUp}/>}
        {/* <div className="alt">
          <p>Log In with:</p>
          <div>
            <BrandIcon src="./icons/brands/google.svg" 
              onClick={googleSignIn}
            />
            <BrandIcon src="./icons/brands/linkedIn.svg" />
            <BrandIcon src="./icons/brands/facebook.svg" />
          </div>
        </div> */}
        <Form.Text showOnlyOnSmallView>
          Don't have an account?{" "}
          <Form.Link to={ROUTES.SIGN_UP}>Sign up</Form.Link>
        </Form.Text>
      </div>

      <Aside>
        <Aside.Group>
          <Aside.Text>Don't have an account?</Aside.Text>
          <Aside.Button href={ROUTES.SIGN_UP}>Sign Up</Aside.Button>
        </Aside.Group>
        <ProgressiveImage
          src="./images/sign-in-aside.svg"
          placeholder="./images/sign-in-aside.svg"
        >
          {(src, loading) => (
            <Aside.Image src={src} style={{ opacity: loading ? 0.5 : 1 }} />
          )}
        </ProgressiveImage>
      </Aside>
    </>
  );
};
