import React, { useEffect } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import LogoComponent from '../components/LogoComponent'
import SocialIcons from '../components/SocialIcons'
import { DarkTheme } from '../components/Theme'
import Fly from '../assets/images/ironManFly.png';
import Fly2 from '../assets/images/ironManFly2.png';
import astronaut from '../assets/images/spaceman.png'
import ParticleComponent from '../components/ParticleComponent';
import {WOW} from 'wowjs';
import 'animate.css';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const float2 = keyframes`
0% { transform: translateY(-30px) }
30% { transform: translateX(-10px) }
50% { transform: translateY(30px) translateX(30px) }
30% { transform: translateX(-10px) }
100% { transform: translateY(-30px) }
`
const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 2%;
    width: 20vw;
    animation: ${float} 4s ease infinite;
    img{
        width: 100%;
        height: auto;
    }
`

const Spaceman2 = styled.div`
    position: absolute;
    top: 30%;
    right: 19%;
    width: 15vw;
    animation: ${float2} 3s ease infinite;
    img{
        width: 100%;
        height: auto;
    }
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const AboutPage = () => {

  useEffect(() => {
    const wow = new WOW({
      // default
      offset: 100, // default
      mobile: false, // default
      live: true, // default
    });
    wow.init();
  }, []);

  return (

    <ThemeProvider  theme={DarkTheme}>
     

      <Box className={``} >
        <LogoComponent />
        <SocialIcons />
        <ParticleComponent theme='dark' />
        <Spaceman>
          <img className='wow bounceInUp' src={Fly} alt="spaceman" />
        </Spaceman>

        <Spaceman2>
          <img className='animate__animated animate__backInDown' src={Fly2} alt="spaceman" />
        </Spaceman2>

       
        <Main  className='animate__animated animate__flash'>
          I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole frontend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
          <br /> <br />
          I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </Main>
      </Box>

    </ThemeProvider>
  )
}

export default AboutPage