import React from 'react';
import { HomeHeader, HeroContainer, BenefitsSection, HowItWorksSection, TestimonialsSection, FooterContainer }from '../containers';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HeroContainer />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FooterContainer />
    </>
  )
}