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
    padding-top: 20%;
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

const InterestBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* width: 80%; */
    margin-left: 4rem;
`;
const Interest = styled.button`
    width: 22%;
    height: 106px;
    margin: 3rem;
    font-size: 24px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 4px 10px 3px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;

    :hover {
        background-color: #686196;
    }
`;
const CompleteBtn = styled.button`
    width: 250px;
    height: 46px;
    border-radius: 4px;
    border: solid 5px #686196;
    background-color: #686196;
    color: white;
    font-size: 18px;
    margin-top: 2rem;
`;

const Login = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const interests = ["영어", "컴퓨터", "취직/면접", "제2외국어", "자격증", "시험"];
    let selects = [];
    const select = (index) => {
        selects.push(index);
        // console.log(selects);
    };
    const complete = () => {
        //console.log(selects);
    };

    return (
        <Wrapper>
            <Logo src={logo}></Logo>
            <Plannet src={plannet}></Plannet>
            <Title>어떤 분야에 관심이 있으신가요? 마음껏 골라보세요.</Title>
            <InterestBox>
                {interests.map((interest, index) => {
                    return <Interest onClick={() => select(index)}>{interest}</Interest>;
                })}
            </InterestBox>
            <CompleteBtn
                onClick={() => {
                    complete();
                    movePage("main");
                }}
            >
                선택 완료
            </CompleteBtn>
        </Wrapper>
    );
};

export default Login;
