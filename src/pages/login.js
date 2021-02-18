import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import plannet from "../assets/plannet.png";
import { login } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
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
    const dispatch = useDispatch();

    const movePage = (page) => {
        history.push(`/${page}`);
    };
    const setUser = (info) => {
        console.log(info);
        dispatch(login(info.profileObj.name));
    };

    return (
        <Wrapper>
            <Logo src={logo}></Logo>
            <Plannet src={plannet}></Plannet>
            <Title>나만의 온라인 스터디 플랫폼, PLAN:NET</Title>
            <SubTitle>스터디에 참여하여,</SubTitle>
            <SubTitle>팀원들과 PLANET을 멋지게 성장시켜 보세요!</SubTitle>
            <GoogleLogin
                buttonText=" 구글 아이디로 로그인하기"
                clientId="928190155742-snpeufjsnt52ci520cnansb21sp1gi1p.apps.googleusercontent.com"
                render={(props) => (
                    <LoginBtn
                        onClick={() => {
                            movePage("interest");
                            props.onClick();
                        }}
                        style={{ color: "black" }}
                    ></LoginBtn>
                )}
                onSuccess={(result) => setUser(result)}
                onFailure={(result) => alert("실패")}
                cookiePolicy={"single_host_origin"}
            />
        </Wrapper>
    );
};

export default Login;
