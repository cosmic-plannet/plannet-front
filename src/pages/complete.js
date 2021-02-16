import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-size: 30px;
    padding: 1rem 0;
`;

const SubTitle = styled.div``;

const CompleteBtn = styled.button`
    border: 1px solid black;
    width: 100px;
    background-color: white;
    margin-top: 1rem;
`;

const Complete = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <Title>한 달만에 토익 뿌시기</Title>
                <SubTitle>평가가 완료되었습니다. 다른 PLANET을 찾아보세요!</SubTitle>
                <CompleteBtn onClick={() => movePage("")}>평가 완료</CompleteBtn>
            </Wrapper>
        </React.Fragment>
    );
};

export default Complete;
