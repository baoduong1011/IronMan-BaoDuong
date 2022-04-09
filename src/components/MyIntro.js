import React from 'react'
import styled from 'styled-components'
import Me from '../assets/images/profile-img.png';
import IronManWar from "../assets/images/IronWar.png"
import { motion } from 'framer-motion'
import "animate.css";

const Box = styled(motion.div)`
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);

  width:65vw;
  height:55vh;
  display: flex;


  background: linear-gradient(
    to right,
    ${props => props.theme.body} 100%,
    ${props => props.theme.body} 100%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 100%,
    ${props => props.theme.body} 100%) top;

    // background-color:rgba(255,255,255,0.5);
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.body};
    z-index:1;
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&>*:last-child{
    color: ${props => `rgba(${props.theme.body},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;
}
`

const MyIntro = () => {

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text className='animate__animated animate__rotateIn' >
          <h1>Hi,</h1>
          <h3>I'm Bao Duong.</h3>
          <h6>I design and Code simple yet beautiful websites.</h6>
        </Text>
      </SubBox>

      <SubBox  >
        
          <img className="pic animate__animated animate__zoomInUp" src={IronManWar} alt="Profile Pic" />
        
      </SubBox>
    </Box>
  )
}

export default MyIntro