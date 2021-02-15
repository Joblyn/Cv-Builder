import React, { useState, useContext, useEffect } from "react";
import { IoMdEye } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { useAuthListener } from "../hooks";
import { MyDocument } from "../components/resumeDoc";
import { useSelector } from "react-redux";

export default function ResumeHeader() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();
  const [active, setActive] = useState(false);
  const [photoUrl, setPhotoUrl] = useState();
  const data = useSelector((state) => state.resumeData);

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
    <Header bg="blue" expand="md">
      <Header.Brand to={ROUTES.HOME} type="dashboard" />
      <Header.Toggle aria-controls="basic-navbar-nav" />
      <Header.Collapse id="basic-navbar-nav">
        <Header.Group>
          <Header.TextLink type="header" to={ROUTES.PREVIEW_RESUME}>
            <Header.Icon>
              <IoMdEye />
            </Header.Icon>
            Preview Resume
          </Header.TextLink>
          <Header.TextLink type="header" to="#">
            <Header.Icon>
              <AiOutlineDownload />
            </Header.Icon>
            {/* {data && (
              <PDFDownloadLink
                document={<MyDocument data={data} />}
                fileName={`${user.displayName}.pdf`}
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download"
                }
              </PDFDownloadLink>
            )} */}
          </Header.TextLink>

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
                type="file"
                accept="image/*"
                onChange={({ target }) => photoUpdate(target)}
                style={{
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                  cursor: "pointer",
                  zIndex: "10",
                  fontSIze: 0,
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
        </Header.Group>
      </Header.Collapse>
    </Header>
  );
}
