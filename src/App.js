import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./app.css";

import  * as ROUTES  from './constants/routes';
import { Loading } from './components/loading'; 
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));
const SignUp = lazy(() => import('./pages/signup'));
const SignIn = lazy(() => import('./pages/signin'));
const Dashboard = lazy(() => import('./pages/dashboard'));

export default function App() {
  const { user } = useAuthListener();

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
          <IsUserRedirect 
            user={user} 
            loggedInPath={ROUTES.DASHBOARD}
            path={ROUTES.SIGN_UP}
          >
            <SignUp />
          </IsUserRedirect>
          <IsUserRedirect 
            user={user} 
            loggedInPath={ROUTES.DASHBOARD}
            path={ROUTES.SIGN_IN}
          >
            <SignIn />
          </IsUserRedirect>
          <ProtectedRoute
            user={user}
            path={ROUTES.DASHBOARD}
          >
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}

