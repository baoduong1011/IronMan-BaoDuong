import React from 'react';
import styled from 'styled-components';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index:3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled(motion.span)`
    width:2px;
    height:8rem;
    background-color: white;
`

const SocialIcons = (props) => {
    return (
        <Icons>

            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 2.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}
            >

                <NavLink style={{ color: 'white' }} target="_blank" to={{ pathname: "https://github.com/baoduong1011" }}>
                    <Github width={25} height={25} fill='currentColor' />
                </NavLink>
            </motion.div>

            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            >

                <NavLink style={{ color: 'white' }} target="_blank" to={{ pathname: "https://www.facebook.com/profile.php?id=100009399229667" }}>
                    <Facebook width={25} height={25} fill='currentColor' />
                </NavLink>
            </motion.div>

            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.4 }}
            >
                <NavLink style={{ color: 'white' }} target="_blank" to={{ pathname: "https://www.instagram.com/bd.10.11/" }}>
                    <Twitter width={25} height={25} fill='currentColor' />
                </NavLink>
            </motion.div>

            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: 'spring', duration: 1, delay: 1.6 }}
            >
                <NavLink style={{ color: 'white' }}  to='/'>
                    <YouTube width={25} height={25} fill='currentColor' />
                </NavLink>
            </motion.div>

            <Line color={props.theme}

            initial={
                {
                    height: 0
                }
            }
            animate={{
                height: '8rem'
            }}
            transition={{
                type: 'spring', duration: 1, delay: 0.8
            }} />
        </Icons>
    )
}

export default SocialIcons