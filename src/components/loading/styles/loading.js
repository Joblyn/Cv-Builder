import styled, { createGlobalStyle } from 'styled-components/macro';


export const LockBody = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Montserrat);

  body {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    font-family: Montserrat; 
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

export const Wrap =  styled.div``;

export const Text = styled.p`
  color: #216DE0;
  display: inline-block;
  margin-left: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const BounceBall = styled.div`
  position: relative;
  display: inline-block;
  height: 37px;
  width: 20px; 

  :before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #216DE0;
    transform-origin: 50%;
    animation: bounce 500ms alternate infinite ease;
  }

  @-ms-keyframes bounce {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      -ms-transform: scaleX(2);
    }
    35% {
      height: 20px;
      border-radius: 50%;
      -ms-transform: scaleX(1);
    }
    100% {
      top: 0;
    }
  }

  @-moz-keyframes bounce {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      -moz-transform: scaleX(2);
    }
    35% {
      height: 20px;
      border-radius: 50%;
      -moz-transform: scaleX(1);
    }
    100% {
      top: 0;
    }
  }

  @-webkit-keyframes bounce {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      -webkit-transform: scaleX(2);
    }
    35% {
      height: 20px;
      border-radius: 50%;
      -webkit-transform: scaleX(1);
    }
    100% {
      top: 0;
    } 
  }

  @keyframes bounce {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 60px 60px 20px 20px;
      transform: scaleX(2);
    }
    35% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1); 
    }
    100% {
      top: 0; 
    }
  }
`;