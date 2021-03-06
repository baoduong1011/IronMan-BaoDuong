import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {DarkTheme} from '../components/Theme';

const Logo = styled.h1`
    display:inline-block;
    color: ${props => props.theme.body};
    font-family: 'Pacifico',cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index:3;
`



const LogoComponent = () => {
  return (
    <Logo>
        <NavLink style={{'textDecoration':'none','color':'white'}} to='/' >BaoDuong</NavLink>
    </Logo>
  )
}

export default LogoComponent