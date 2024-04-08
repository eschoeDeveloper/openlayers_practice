import React from 'react';
import { NavLink } from 'react-router-dom';
import { info } from './CustomAlert';
import "../assets/style/NavigationView.css";

import styled from 'styled-components';

const StyledNavigator = styled.nav`
    width: 100%;
    height: 10vh;
    padding: 3vh 0;
    font-size: 1.0em;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 20vh;
    background-color: #7fedff;
    opacity: 0.7;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: bold;
`;

export default function NavigationView() {

    return (

        <StyledNavigator>
            <StyledNavLink to="/" onClick={() => { info("지도"); }}>지도</StyledNavLink>
            <StyledNavLink to="/" onClick={() => { info("좌표찾기"); }}>좌표 찾기</StyledNavLink>
            <StyledNavLink to="/" onClick={() => { info("주소검색"); }}>주소 검색</StyledNavLink>
            <StyledNavLink to="/" onClick={() => { info("위치저장"); }}>위치 저장</StyledNavLink>
        </StyledNavigator>

    );

}

