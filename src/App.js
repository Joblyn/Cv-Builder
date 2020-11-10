import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import  * as ROUTES  from './constants/routes';
import { Loading } from './components'; 

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const SignUp = lazy(() => import('./pages/signup'));
const SignIn = lazy(() => import('./pages/signin'));

export default function App() {
  
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home /> 
          </Route>
          <Route exact path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route exact path={ROUTES.CONTACT}>
            <Contact />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <SignUp />
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            <SignIn />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

