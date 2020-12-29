import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

import * as ROUTES from "./constants/routes";
import { Loading } from "./components/loading";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import Resume from './pages/resume';

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const SignUp = lazy(() => import("./pages/signup"));
const SignIn = lazy(() => import("./pages/signin"));

const PersonalInfo = lazy(() => import("./containers/personal-Info"));
const Education = lazy(() => import("./containers/education"));
const WorkExperience = lazy(() => import("./containers/work-experience"));
const Languages = lazy(() => import("./containers/languages"));
const Certifications = lazy(() => import("./containers/certifications"));
const Achievements = lazy(() => import("./containers/achievements"));
const Skills = lazy(() => import("./containers/skills"));
const Reference = lazy(() => import("./containers/reference"));

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
            loggedInPath={ROUTES.PERS_INFO}
            path={ROUTES.SIGN_UP}
            component={SignUp} 
          />
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.PERS_INFO}
            path={ROUTES.SIGN_IN}
            component={SignIn} 
          />

          <Resume>
            <ProtectedRoute user={user} path={ROUTES.PERS_INFO} component={PersonalInfo} />
            <ProtectedRoute user={user} path={ROUTES.EDU} component={Education} />
            <ProtectedRoute user={user} path={ROUTES.WORK_EXP} component={WorkExperience} />
            <ProtectedRoute user={user} path={ROUTES.LANG} component={Languages} />
            <ProtectedRoute user={user} path={ROUTES.CERT} component={Certifications} />
            <ProtectedRoute user={user} path={ROUTES.ACHIEVE} component={Achievements} />
            <ProtectedRoute user={user} path={ROUTES.SKILLS} component={Skills} />
            <ProtectedRoute user={user} path={ROUTES.REF} component={Reference} />
          </Resume>
        </Switch>
      </Suspense>
    </Router>
  );
}
