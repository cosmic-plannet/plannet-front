import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/slogo.png";
import user from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    text-align: center;
    /* padding: 1rem; */
    /* padding-top: 1rem;
    padding-right: 1rem; */
`;
const LogoBox = styled.div`
    flex: 1;
`;
const Logo = styled.img`
    width: 66px;
    height: 35px;
    margin-left: 5rem;
    /* flex: 1; */
    /* margin-top: 15px; */
`;
const UserName = styled.div``;
const Profile = styled.img`
    width: 25px;
    height: 25px;
    margin: 0 10px;
    /* border: 1px solid black; */
    /* margin-right: 13px; */
    /* margin: 13px 13px 13px 0; */
`;

const Header = ({ history }) => {
    const username = useSelector((state) => state.user.username);

    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <LogoBox>
                <Logo onClick={() => movePage("main")} src={logo}></Logo>
            </LogoBox>
            <UserName>{username}</UserName>
            <Profile onClick={() => movePage("mypage")} src={user}></Profile>
        </Wrapper>
    );
};

export default withRouter(Header);
