import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
// const Logo = styled.img``;
const Logo = styled.div``;
const Profile = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    float: right;
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
