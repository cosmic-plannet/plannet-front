import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import plannet from "../assets/plannet.png";
import { useDispatch, useSelector } from "react-redux";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.img`
    width: 126px;
    height: 68px;
    padding: 0.5rem 0;
    padding-top: 236px;
`;
const Plannet = styled.img`
    width: 283px;
    height: 67px;
`;
const Title = styled.div`
    font-size: 20px;
    color: #212121;
    padding: 2rem 0 1rem 0;
`;
const SubTitle = styled.div`
    font-size: 20px;
    color: #212121;
    padding-bottom: 0.2rem;
`;

const LoginBtn = styled.button`
    border: solid 5px #686196;
    margin-top: 2rem;
    width: 476px;
    height: 60px;
    background-color: white;
    color: #686196;
`;

const Login = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <Wrapper>
            <Logo src={logo}></Logo>
            <Plannet src={plannet}></Plannet>
            <Title>나만의 온라인 스터디 플랫폼, PLAN:NET</Title>
            <SubTitle>스터디에 참여하여,</SubTitle>
            <SubTitle>팀원들과 PLANET을 멋지게 성장시켜 보세요!</SubTitle>
            <LoginBtn onClick={() => movePage("interest")}>구글 아이디로 로그인하기</LoginBtn>
        </Wrapper>
    );
};

export default Login;
