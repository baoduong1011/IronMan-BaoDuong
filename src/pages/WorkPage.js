import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import {DarkTheme} from '../components/Theme';
import { motion } from 'framer-motion';

import LogoComponent from '../components/LogoComponent';
import SocialIcons from '../components/SocialIcons';

import {Work} from '../data/WorkData';
import Card from '../components/Card';
import BigTitle from '../components/BigTitle';
import { PowerBtn, PowerIronMan } from '../components/AllSvgs';
import ParticleComponent from '../components/ParticleComponent';

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  height:400vh;
  position: relative;
  display: flex;
  align-items: center;


`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left:calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color:white;
`
const Rotate = styled.span`
  display:block;
  position: fixed;
  right:1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index:1;
`


// Framer-motion Configuration
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



const WorkPage = () => {

  const ref = useRef(null);
  const yinyang = useRef(null);
  
  useEffect(() => {
    let element = ref.current;


    const rotate = () => {

      element.style.transform = `translateX(${-window.pageYOffset}px)`


      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate);

    }
  }, [])

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -600 },
    
  }
  

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{duration: 0.5}}
      exit= {{
        opacity: 0, x: -600
      }}
      >
        <ParticleComponent theme='dark' />
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
       

        <Main ref={ref} variants={container} initial='hidden' animate='show'  >
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
            )
          }
        </Main>
        <Rotate ref={yinyang}>
          <PowerIronMan width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top='10%' right="20%" />
      </Box>

    </ThemeProvider>
  ) 
}

export default WorkPage