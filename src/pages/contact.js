import React, { useState } from 'react';
import { FooterContainer, HomeHeader } from '../containers';
import { Info, Form } from "../components";
import { Spinner } from '../components/loading'; 

export default function Contact() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  
  const handleSend = (e) => {
    e.preventDefault();
    const isEmpty = email === '' || phoneNumber === '' || message === '';
    if(isEmpty) {
      setIsEmpty(true);
    }
  }
  return (
    <>
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
                placeholder = 'cannot be empty'
                required
              />
            </Form.Group>
              <Form.Group>
              <Form.Label htmlFor="phoneNo">Phone number</Form.Label>
              <Form.Input 
                id = "phoneNo"
                type = "text"
                value = {phoneNumber}
                onChange={({ target }) => setPhoneNumber(target.value)}
                placeholder = 'cannot be empty'
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.TextArea 
                id="message"
                value = {message}
                onChange = {({ target }) => setMessage(target.value)}
                placeholder="cannot be empty"
                required
                height="10rem"
              />
            </Form.Group>
            <Form.Button 
              disabled = {isSending}
              type = 'submit' 
              form = "form" 
              isSending = {isSending}
              onClick = {handleSend}
            >
              {isSending ? <Spinner /> : 'Send'}
            </Form.Button> 
          </Form>
        </div>  
      </div> 
      <FooterContainer/>
    </>
  )
}