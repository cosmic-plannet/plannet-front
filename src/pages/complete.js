import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import LeaderIcon from "../assets/leader.png";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LeaderImg = styled.img`
    width: 45px;
    /* height: 45px; */
    padding-top: 2rem;
`;
const PlanetTitleBox = styled.div`
    display: flex;
`;
const PlanetDot = styled.div`
    width: 13px;
    height: 13px;
    background-color: #7984a7;
    border-radius: 1000px;
    margin: 10px 10px;
`;
const PlanetTitle = styled.div`
    font-size: 24px;
`;
const SubTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #686196;
    padding: 15% 0;
`;

const CompleteBtn = styled.button`
    width: 250px;
    height: 46px;
    border-radius: 4px;
    border: none;
    background-color: #686196;
    color: white;
    font-size: 18px;
`;

const Complete = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <LeaderImg src={LeaderIcon}></LeaderImg>
                <PlanetTitleBox>
                    <PlanetDot></PlanetDot>
                    <PlanetTitle>한 달만에 토익 뿌시기</PlanetTitle>
                </PlanetTitleBox>
                <SubTitle>평가가 완료되었습니다. 다른 PLANET을 찾아보세요!</SubTitle>
                <CompleteBtn onClick={() => movePage("main")}>평가 완료</CompleteBtn>
            </Wrapper>
        </React.Fragment>
    );
};

export default Complete;
