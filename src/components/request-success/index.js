import React, { useState, useContext } from "react";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Image,
  Icon,
  Notice,
  Text,
  Link,
  Overlay,
} from "./styles/request-success";
import { Form } from "../";
import { FirebaseContext } from "../../context/firebase";
import { Spinner } from "../loading";

export function RequestSuccessful({ setIsSent, ...restProps }) {
  return (
    <Overlay {...restProps}>
      <Container>
        <Image src="./images/request-success.svg" alt="" />
        <Icon icon={faTimes} type="times" onClick={() => setIsSent(false)} />
        <Icon icon={faCheckCircle} type="check-circle" />
        <Notice>Your request has been received</Notice>
        <Text>
          One of our customer service agents will get back to you as soon as
          possible. You can always refer to our <Link to="#">FAQ & Help</Link>{" "}
          section here for instant help
        </Text>
      </Container>
    </Overlay>
  );
}

export function SignUpSuccessful({ children, ...restProps }) {
  return (
    <Overlay {...restProps}>
      <Container>
        <Image src="./images/request-success.svg" alt="" />
        {/* <Icon icon={faTimes} type="times"/> */}
        <Icon icon={faCheckCircle} type="check-circle" />
        <Notice>Account created successfully</Notice>
      </Container>
    </Overlay>
  );
}

export function ForgotPasswordPopup({ setResetPasswordPopupsetPopUp }) {
  const [email, setEmail] = useState();
  const { firebase } = useContext(FirebaseContext);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendLink() {
    if (email) {
      try {
        setIsLoading(true);
        setError("");
        setMessage("");
        await firebase.auth().sendPasswordResetEmail(email);
        setMessage("Check your inbox for a link to reset your password.");
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        setError("Failed to reset password. Try again.");
        setMessage("");
      }
    } else {
      setError("Please input your email");
    }
  }

  return (
    <Overlay>
      <Container>
        <Icon
          icon={faTimes}
          type="times"
          onClick={() => setResetPasswordPopupsetPopUp(false)}
        />
        <Notice style={{ fontSize: "2rem" }}>Reset Password</Notice>
        {error && <Form.Error>{error}</Form.Error>}
        <Form id="email">
          <Form.Group>
            <Form.Label htmlFor="email-for-reset" style={{textAlign: 'left'}}>Email</Form.Label>
            <Form.Input
              type="email"
              name="email"
              id="email-for-reset"
              onChange={({ target }) => setEmail(target.value)}
              required
            />
          </Form.Group>
          {message && <Text>{message}</Text>}
          <Form.Button
            form="email"
            type="submit"
            style={{ marginTop: "3rem" }}
            onClick={sendLink}
          >
            {isLoading ? <Spinner /> : "Send"}
          </Form.Button>
          <Form.Text style={{ marginTop: '1.2rem' }}>
            <Form.Link onClick={() => setResetPasswordPopupsetPopUp(false)}>Forgot password?</Form.Link>
          </Form.Text>
        </Form>
      </Container>
    </Overlay>
  );
}
