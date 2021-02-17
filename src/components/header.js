import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/slogo.png";

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.2);
    /* display: flex; */
    /* align-items: center; */
    text-align: center;
    /* padding: 1rem; */
    padding-top: 1rem;
    padding-right: 1rem;
`;
const Logo = styled.img`
    width: 66px;
    height: 35px;
    /* margin-top: 15px; */
`;

const Profile = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    float: right;
    /* margin-right: 13px; */
    /* margin: 13px 13px 13px 0; */
`;

const Header = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <Logo onClick={() => movePage("")} src={logo}></Logo>
            {/* <div onClick={() => movePage("login")}>로그인</div> */}
            <Profile onClick={() => movePage("mypage")}></Profile>
        </Wrapper>
    );
};

export default withRouter(Header);
