import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-width: 1200px; */
`;
const Title = styled.div``;

const RankingContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`;
const RankingBox = styled.div`
    flex: 1;
    text-align: center;
    margin: 0 1rem;
`;
const RankingTitle = styled.div``;
const RankingList = styled.div`
    display: flex;
    flex-direction: column;
`;
const RankingContent = styled.div``;

const Ranking = ({ history }) => {
    // const [inputText, setInputText] = useState("");
    // const id = useSelector((state) => state.auth.profile_id);
    // const dispatch = useDispatch();

    // useEffect(() => {});

    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <Title>RANKING</Title>
                <RankingContainer>
                    <RankingBox>
                        <RankingTitle>PLANET 랭킹</RankingTitle>
                        <RankingList>
                            <RankingContent>1위</RankingContent>
                            <RankingContent>2위</RankingContent>
                            <RankingContent>3위</RankingContent>
                        </RankingList>
                    </RankingBox>
                    <RankingBox>
                        <RankingTitle>여행자 랭킹</RankingTitle>
                        <RankingList>
                            <RankingContent>1위</RankingContent>
                            <RankingContent>2위</RankingContent>
                            <RankingContent>3위</RankingContent>
                        </RankingList>
                    </RankingBox>
                    <RankingBox>
                        <RankingTitle>영어 랭킹</RankingTitle>
                        <RankingList>
                            <RankingContent>1위</RankingContent>
                            <RankingContent>2위</RankingContent>
                            <RankingContent>3위</RankingContent>
                        </RankingList>
                    </RankingBox>
                </RankingContainer>
            </Wrapper>
        </React.Fragment>
    );
};

export default Ranking;
