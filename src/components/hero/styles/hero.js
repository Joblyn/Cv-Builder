import styled from 'styled-components/macro';
import { Button as BootstrapButton } from 'react-bootstrap'; 

// Container, Left, Caption, Text, Button, Right, Image

export const Container = styled.div`
  padding: 0;
  display: flex;
  overflow-x: hidden;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const Left = styled.div`
  padding-left: 5%;
  padding-right: 0!important;
  padding-top: 8%;
`;


export const Caption = styled.h1`
  font-family: Inter;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
  letter-spacing: 0em;
  text-align: left;

  @media(max-width:1000px) {
    font-size: 45px;
    line-height: normal;
  }
`;

export const Text = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 10px;
`;

export const Button = styled(BootstrapButton)`
  text-align: center;
  padding: 1.4rem 1.8rem;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  background-color: #216DE0;
  border-radius: 6px;
  margin-top: 30px;
  box-shadow: 0px 1px 20px -10px #216DE0;
  border: none;
  color: #fff;
`;

export const Right = styled.div`
  padding: 0!important;
  display: flex;
  justify-content: flex-end; 
  text-align: right;
`;
export const Image = styled.img`
  position: relative;

  @media (max-width: 1000px) {
  transform: scale(0.9);
  top:-40px;
  right: -35px;
  }
  
  @media (max-width: 768px) {
    transform: scale(0.7);
    top: -120px;
    right: -100px;
  }
`;
