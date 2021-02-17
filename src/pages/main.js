import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Carousel from "../components/carousel";
import { Link } from "react-router-dom";
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
const TitleBox = styled.div`
    padding: 3rem 0;
    width: 72%;
    display: flex;
`;
const Title = styled.div`
    text-align: left;
    flex: 1;
    font-size: 24px;
    color: #686196;
`;
const MoreBtn = styled.div`
    width: 70px;
    font-size: 15px;
`;
const MakeBtn = styled.button`
    width: 125px;
    height: 29px;
    border-radius: 4px;
    border: solid 5px #686196;
    background-color: #686196;
    color: white;
    color: #ffffff;
    margin-top: 14px;
`;

const PlanetBox = styled.div`
    width: 100%;
    height: 206px;
`;
const PlanetName = styled.div`
    font-size: 20px;
    color: #212121;
    text-decoration: none;
`;
const PlanetInfo = styled.div`
    width: 100%;
    height: 44px;
    margin-top: 8px;
    border-radius: 4px;
    background-color: rgba(121, 132, 167, 0.15);
    text-decoration: none;
    font-size: 15px;
    color: #212121;
    display: flex;
    align-items: center;
    padding-left: 12px;
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
        { name: "study0", category: "english", level: 1, person: 3, id: 0 },
        { name: "study1", category: "english", level: 1, person: 3, id: 1 },
        { name: "study2", category: "english", level: 1, person: 3, id: 2 },
        { name: "study3", category: "english", level: 1, person: 3, id: 3 },
        { name: "study4", category: "english", level: 1, person: 3, id: 4 },
    ];
    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <TitleBox>
                    <Title>나의 PLANET</Title>
                    <MakeBtn>PLANET 만들기</MakeBtn>
                </TitleBox>
                <div style={{ width: "90%" }}>
                    <Carousel
                        planets={planets.map((planet) => {
                            return (
                                <Link to={`/planet/detail/${planet.id}`}>
                                    <PlanetBox>
                                        <PlanetName>{planet.name}</PlanetName>
                                        <PlanetInfo>{planet.category}</PlanetInfo>
                                        <PlanetInfo>{planet.level}</PlanetInfo>
                                        <PlanetInfo>{planet.person}</PlanetInfo>
                                    </PlanetBox>
                                </Link>
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
