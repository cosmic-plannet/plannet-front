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

const SubTitle = styled.div``;

const InterestBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 6rem;
`;
const Interest = styled.button`
    border: 1px solid black;
    width: 20%;
    background-color: white;
    margin: 1rem 2rem;
    height: 50px;

    :hover {
        background-color: purple;
    }
`;
const CompleteBtn = styled.button`
    border: 1px solid black;
    width: 100px;
    background-color: white;
    margin-top: 1rem;
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
            <Logo></Logo>
            <SubTitle>어떤 분야를 스터디하고 싶으신가요? (중복 선택 가능)</SubTitle>
            <InterestBox>
                {interests.map((interest, index) => {
                    return <Interest onClick={() => select(index)}>{interest}</Interest>;
                })}
            </InterestBox>
            <CompleteBtn
                onClick={() => {
                    complete();
                    movePage("");
                }}
            >
                선택 완료
            </CompleteBtn>
        </Wrapper>
    );
};

export default Login;
