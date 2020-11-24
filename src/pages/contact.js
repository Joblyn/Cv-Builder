import React, { useState, useContext } from 'react';
import { FooterContainer, HomeHeader } from '../containers';
import { Info, Form } from "../components";
import { RequestSuccessful } from '../components/request-success';
import { Spinner } from '../components/loading'
import { FirebaseContext } from '../context/firebase';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPhoneNo, setInvalidPhoneNo] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  
  const onSend = e => {
    e.preventDefault();
    const isEmpty = email === '' || phoneNo === '' || message === '';
    const emailIsInvalid = email === (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gm);
    const phoneNoIsInvalid = phoneNo === (/^[0-9]*$/gm);

    if(isEmpty) {
      setIsEmpty(true);
    } else if (emailIsInvalid) {
      setInvalidEmail(true);
    } else if (phoneNoIsInvalid) {
      setInvalidPhoneNo(true);
    } else {
      setInvalidEmail(false);
      setInvalidPhoneNo(false);
      setIsSending(true);
      const info = {
        email, 
        phoneNo,
        message
      };
      firebase.firestore().collection('requests').add(info)
        .then(() => {
          setIsSending(false);
          setMessage('');
          setPhoneNo('');
          setEmail('');
          setIsSent(true);
        })
        .catch(error => {
          setIsSending(false);
          console.log( error);
          alert('An error occurred, please try again');
        })
      }
    }

    return <>
      <HomeHeader/>
      <div className="abt-page">
       <img src="./images/contact.svg" alt='' className="bg-img"/>
         <div className="abt-cont">
          <Info>
            <Info.Heading>Contact Us</Info.Heading>
            <Info.Text>Feel free to reach out to us with your questions and complaints</Info.Text>
            <Info.Group>
              <Info.Icon src="./icons/location.svg"/>
              <Info.Contact>
              Resume Builder Ltd. <br/>
              24 Lekki Street Lagos, Nigeria
              </Info.Contact>
            </Info.Group>
            <Info.Group>
              <Info.Icon src="./icons/phone.svg"/>
              <Info.Contact>090 - 000 - 0000</Info.Contact>
            </Info.Group>
            <Info.Group>
              <Info.Icon src="./icons/mail.svg"/>
              <Info.Contact>support@resumebuilder.com</Info.Contact>
            </Info.Group>
          </Info>
           <Form id="form" marginLeft="9rem">
            <Form.Group>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Input 
                id="email"
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                placeholder = { isEmpty ? 'cannot be empty' : '' }
                required
              />
              {!invalidEmail && <Form.Error>Please input a valid email</Form.Error>}
            </Form.Group>
              <Form.Group>
              <Form.Label htmlFor="phoneNo">Phone number</Form.Label>
              <Form.Input 
                id = "phoneNo"
                type = "text"
                value = {phoneNo}
                onChange={({ target }) => setPhoneNo(target.value)}
                placeholder = { isEmpty ? 'cannot be empty' : '' }
                required
              />
              {!invalidPhoneNo && <Form.Error>Please input a valid phone number</Form.Error>}
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.TextArea 
                id="message"
                value = {message}
                onChange = {({ target }) => setMessage(target.value)}
                placeholder = { isEmpty ? 'cannot be empty' : '' }
                required
                height="10rem"
              />
            </Form.Group>
            <Form.Button 
              disabled = {isSending}
              type = 'submit' 
              form = "form" 
              onClick = {onSend}
              position = 'right'
            >
              {isSending ? <Spinner /> : 'Send'}
            </Form.Button> 
          </Form>
        </div>
        {isSent && <RequestSuccessful setIsSent={setIsSent} />}
      </div> 
      <FooterContainer/>
    </>
}
