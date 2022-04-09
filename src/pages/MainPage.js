import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import IronManButton from '../components/IronManButton';
import Video from '../assets/audio/ironManVideo.mp4';
import LogoComponent from '../components/LogoComponent';
import SocialIcons from '../components/SocialIcons';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PowerIronMan, YinYang } from '../components/AllSvgs';
import MyIntro from '../components/MyIntro';
import 'animate.css';


const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: relative;
    h2,h3,h4,h5,h6{
      font-family:'Karla', sans-serif ;
      font-weight:500;
    }
`

const Container = styled.div`
    padding: 2rem;
`


const CenterVideo = styled.video`
    position:fixed;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform:translateX(-50%,-50%);


    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    pointer-events:none;
`
const Contact = styled(NavLink)`
  color: ${props => props.theme.body};
  position: absolute;
  top: 2rem;
  right: 2rem;
  text-decoration: none;
  z-index:1;
  font-family: 'Pacifico',cursive;
  font-size:1.5rem;
`

const BLOG = styled(NavLink)`
  color: ${props => props.theme.body};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index:1;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.theme.body};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.body};
text-decoration: none;
z-index:1;
`

const WORK = styled(NavLink)`
color: ${props => props.theme.body};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
  from{
      transform: rotate(0);
  }
  to{
      transform: rotate(360deg);
  }
`

const Center = styled.button`
  position: absolute;
  top:85%;
  left:${props => props.click ? "50%" : "92%"};
  transform: translate(-50%,-50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  &>:first-child{
      animation: ${rotate} infinite 1.5s linear;
  }
`


const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '0%' : '50%'};
height: ${props => props.click ? '0%' : '100%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const container = {

  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const AnimationPower = styled(motion.div)``






const MainPage = () => {

  const [state, setState] = useState({
    logo: false,
    className:"",
    click: true
  })

  useEffect(() => {
    window.setTimeout(() => {
      setState({ ...state, logo: true,className:"animate__animated animate__fadeIn" })
    }, 11500)
  }, [])

  let handleClick = () => setState({ ...state, click: !state.click });

  return (
    <MainContainer>

      <DarkDiv click={state.click} />

      <CenterVideo autoPlay muted>
        <source
          src={Video}
          type="video/mp4"
        />
      </CenterVideo>


      <Container>
        <LogoComponent />

        <SocialIcons />

        <Contact target="_blank" to={{ pathname: "mailto:baoduong101110@gmail.com" }} >
          Iron Man, Say hi ...
        </Contact>

        <BLOG  to='/blog' >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            BLOG
          </motion.h2>
        </BLOG>

        <Center click={state.click} >
          <div className='animate__animated animate__fadeIn' >
            <PowerIronMan  onClick={() =>
              handleClick()
            } width={state.click ? 250 : 150} height={state.click ? 250 : 150}  className={state.logo ? 'animate__animated animate__fadeInUp' : ""} opacity={state.logo ? 1 : 0} />
            </div>
        </Center>

        <WORK  to="/work" >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            WORK
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to='/about' >
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ABOUT
            </motion.h2>
          </ABOUT>

          <SKILLS to='/skill' >
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              SKILL
            </motion.h2>

          </SKILLS>
        </BottomBar>
      </Container>

      {state.click ? null : <MyIntro click={state.click} />}
    </MainContainer>
  )
}

export default MainPage;