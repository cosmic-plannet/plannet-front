import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Carousel from "../components/carousel";
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
const Logo = styled.img``;

const TitleBox = styled.div`
    font-size: 20px;
    padding: 3rem 0;
    width: 90%;
    display: flex;
`;
const Title = styled.div`
    text-align: left;
    flex: 1;
`;
const MoreBtn = styled.div`
    width: 70px;
    font-size: 15px;
`;
const MakeBtn = styled.button`
    border: 1px solid black;
    width: 200px;
    background-color: white;
    margin-left: 70%;
    margin-top: 1rem;
`;

const PlanetBox = styled.div`
    width: 250px;
    height: 150px;
    border: 1px solid black;
`;
const PlanetName = styled.div`
    width: 100%;
`;
const PlanetInfo = styled.div`
    border: 1px solid;
`;

const RankingContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
`;
const RankingBox = styled.div`
    flex: 1;
    text-align: center;
`;
const RankingTitle = styled.div``;
const RankingList = styled.div`
    display: flex;
    flex-direction: column;
`;
const RankingContent = styled.div``;

const Main = ({ history }) => {
    // const [inputText, setInputText] = useState("");
    // const id = useSelector((state) => state.auth.profile_id);
    // const dispatch = useDispatch();

    // useEffect(() => {});

    const movePage = (page) => {
        history.push(`/${page}`);
    };

    let planets = [
        { name: "study0", category: "english", level: 1, person: 3 },
        { name: "study1", category: "english", level: 1, person: 3 },
        { name: "study2", category: "english", level: 1, person: 3 },
        { name: "study3", category: "english", level: 1, person: 3 },
        { name: "study4", category: "english", level: 1, person: 3 },
    ];
    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <MakeBtn>PLANET 만들기</MakeBtn>
                <TitleBox>
                    <Title>나의 PLANET</Title>
                </TitleBox>
                <div style={{ width: "90%" }}>
                    <Carousel
                        planets={planets.map((planet) => {
                            return (
                                <PlanetBox>
                                    <PlanetName>{planet.name}</PlanetName>
                                    <PlanetInfo>{planet.category}</PlanetInfo>
                                    <PlanetInfo>{planet.level}</PlanetInfo>
                                    <PlanetInfo>{planet.person}</PlanetInfo>
                                </PlanetBox>
                            );
                        })}
                    ></Carousel>
                </div>

                <TitleBox>
                    <Title>랭킹</Title>
                    <MoreBtn onClick={() => movePage("ranking")}>더보기</MoreBtn>
                </TitleBox>
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
                </RankingContainer>

                <TitleBox>
                    <Title>다른 PLANET도 구경해보세요</Title>
                </TitleBox>
                <div style={{ width: "90%" }}>
                    <Carousel
                        planets={planets.map((planet) => {
                            return (
                                <PlanetBox>
                                    <PlanetName>{planet.name}</PlanetName>
                                    <PlanetInfo>{planet.category}</PlanetInfo>
                                    <PlanetInfo>{planet.level}</PlanetInfo>
                                    <PlanetInfo>{planet.person}</PlanetInfo>
                                </PlanetBox>
                            );
                        })}
                    ></Carousel>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default Main;
