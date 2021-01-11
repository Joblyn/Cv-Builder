import React, { useState, useContext, useEffect } from "react";

import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { Header } from "../components";
import { useAuthListener } from "../hooks";

export default function HomeHeader() {
  const location = window.location.pathname;
  const { firebase } = useContext(FirebaseContext);
  const [active, setActive] = useState(false);
  const { user } = useAuthListener();
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    if (user) {
      firebase
        .storage()
        .ref("users/" + user.uid + "/profile.jpg")
        .getDownloadURL()
        .then((imgUrl) => {
          setPhotoUrl(imgUrl);
        });
    }
  }, [firebase, user]);

  const photoUpdate = (target) => {
    const file = target.files[0];
    firebase
      .storage()
      .ref("users/" + user.uid + "/profile.jpg")
      .put(file)
      .then(() => {
        firebase
          .storage()
          .ref("users/" + user.uid + "/profile.jpg")
          .getDownloadURL()
          .then((imgUrl) => {
            setPhotoUrl(imgUrl);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Header expand="lg">
        <Header.Brand to={ROUTES.HOME} />
        {location === ROUTES.SIGN_IN || location === ROUTES.SIGN_UP ? null : (
          <>
            <Header.Toggle aria-controls="basic-navbar-nav" />
            <Header.Collapse id="basic-navbar-nav">
              <Header.Group>
                <Header.Link
                  active={location === ROUTES.HOME ? "true" : "false"}
                  to={ROUTES.HOME}
                >
                  Home
                </Header.Link>
                <Header.Link
                  active={location === ROUTES.ABOUT ? "true" : "false"}
                  to={ROUTES.ABOUT}
                >
                  About
                </Header.Link>
                <Header.Link
                  active={location === ROUTES.CONTACT ? "true" : "false"}
                  to={ROUTES.CONTACT}
                >
                  Contact
                </Header.Link>
                {user ? (
                  <>
                    <Header.User
                      displayName={user.displayName}
                      photoURL={photoUrl}
                      onMouseEnter={() => setActive(true)}
                      onMouseLeave={() => setActive(false)}
                    />
                    <Header.UserNav
                      active={active}
                      onMouseEnter={() => setActive(true)}
                      onMouseLeave={() => setActive(false)}
                    >
                      <Header.Item>
                        <Header.TextLink to={ROUTES.PERS_INFO} type="user">
                          Build Resume
                        </Header.TextLink>
                      </Header.Item>
                      <Header.Item className="position-relative">
                        <Header.TextLink to="#" type="user">
                          Update photo
                        </Header.TextLink>
                        <input
                          onChange={({ target }) => photoUpdate(target)}
                          type="file"
                          id="file"
                          style={{
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            cursor: "pointer",
                            zIndex: "10",
                            fontSize: 0,
                          }}
                        />
                      </Header.Item>
                      <Header.Item>
                        <Header.TextLink
                          onClick={() => firebase.auth().signOut()}
                          to="#"
                          type="user"
                        >
                          Log out
                        </Header.TextLink>
                      </Header.Item>
                    </Header.UserNav>
                  </>
                ) : (
                  <Header.NavButton href={ROUTES.SIGN_IN}>
                    Get Started
                  </Header.NavButton>
                )}
              </Header.Group>
            </Header.Collapse>
          </>
        )}
      </Header>
    </>
  );
}
