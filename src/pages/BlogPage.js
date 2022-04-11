import React from 'react'
import styled from 'styled-components'
import BGBlog from '../assets/images/bgBlog.jpg';
import LogoComponent from '../components/LogoComponent';
import SocialIcons from '../components/SocialIcons';
import Video from '../assets/audio/BlogVideo.mp4';
import { Blogs } from '../data/BlogData';
import BlogComponent from '../components/BlogComponent';
import { motion } from 'framer-motion';

const MainContainer = styled(motion.div)`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100%;
  overflow:hidden;
  position: relative;
  h2,h3,h4,h5,h6{
    font-family:'Karla', sans-serif ;
    font-weight:500;
  }
`

const CenterVideo = styled.video`
    position:fixed;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform:translateX(-50%,-50%);
    pointer-events:none;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`

const container = {

  hidden: { opacity: 0, x: 600 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}





const BlogPage = () => {
  return (
    <MainContainer

      variants={container}
      initial='hidden'
      animate='show'
      exit={{
        opacity: 0, transition: { duration: 0.5 }
      }}

    >
      <CenterVideo autoPlay muted>
        <source
          src={Video}
          type="video/mp4"
        />
      </CenterVideo>
      <LogoComponent />
      <SocialIcons />

      <Center>
        <Grid>

          {
            Blogs.map(blog => {
              return <BlogComponent key={blog.id} blog={blog} />
            })
          }
        </Grid>

      </Center>


    </MainContainer>
  )
}

export default BlogPage