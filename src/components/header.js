import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    border: 1px solid black;
    /* display: flex; */
    /* align-items: center; */
    text-align: center;
`;
// const Logo = styled.img``;
const Logo = styled.div`
    margin: auto 0;
`;
const Profile = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    float: right;
    margin: -10px 10px 0 0;
`;

const Header = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <Logo onClick={() => movePage("")}>로고</Logo>
            <Profile onClick={() => movePage("mypage")}></Profile>
        </Wrapper>
    );
};

export default Header;
