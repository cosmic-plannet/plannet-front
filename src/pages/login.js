import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.img``;

const Title = styled.div`
    font-size: 30px;
    padding: 1rem 0;
`;

const SubTitle = styled.div``;

const LoginBtn = styled.button`
    border: 1px solid black;
    width: 100px;
    background-color: white;
    margin-top: 1rem;
`;

const Login = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <Logo></Logo>
            <Title>나만의 온라인 스터디 플랫폼, PLAN:NET</Title>
            <SubTitle>스터디에 참여하여 팀원들과 PLANET을 멋지게 성장시켜 보세요!</SubTitle>
            <LoginBtn onClick={() => movePage("interest")}>구글 로그인</LoginBtn>
        </Wrapper>
    );
};

export default Login;
