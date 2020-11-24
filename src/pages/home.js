import React, { useContext } from 'react';
import { HomeHeader, HeroContainer, BenefitsSection, HowItWorksSection, TestimonialsSection, FooterContainer }from '../containers';
import { FirebaseContext } from '../context/firebase';

export default function Home() {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser; 

  return (
    <>
      <HomeHeader />
      <HeroContainer user={user}/>
      <BenefitsSection user={user}/>
      <HowItWorksSection />
      <TestimonialsSection user={user} />
      <FooterContainer />
    </>
  )
}