import React, { useState, useContext, useEffect } from "react";
import { IoMdEye } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import {
  // PDFDownloadLink,
  pdf,
} from "@react-pdf/renderer";
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
  const [show, setShow] = useState(false);

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

  const saveBlob = (blob, filename) => {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    let url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const savePdf = async (document, filename) => {
    saveBlob(await pdf(document).toBlob(), filename);
  };

  return (
    user && (
      <Header bg="blue" expand="md">
        <Header.Brand to={ROUTES.HOME} type="dashboard" />
        <Header.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShow(!show)}
          show={show}
          resume
        />
        <Header.Collapse id="basic-navbar-nav">
          <Header.Group>
            <Header.TextLink type="header" to={ROUTES.PREVIEW_RESUME}>
              <Header.Icon>
                <IoMdEye />
              </Header.Icon>
              Preview Resume
            </Header.TextLink>
            {window.location.pathname === ROUTES.PREVIEW_RESUME ? (
              <Header.TextLink
                type="header"
                onClick={() =>
                  savePdf(<MyDocument data={data} />, "resume.pdf")
                }
              >
                <Header.Icon>
                  <AiOutlineDownload />
                </Header.Icon>
                Download
              </Header.TextLink>
            ) : null}
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
    )
  );
}
