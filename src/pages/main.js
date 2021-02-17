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
const PlanetNameBox = styled.div`
    display: flex;
    flex-direction: row;
`;
const PlanetDot = styled.div`
    width: 13px;
    height: 13px;
    background-color: #7984a7;
    border-radius: 50px;
    margin: 7px 10px;
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
const RankingSection = styled.div`
    margin-top: 2rem;
    width: 100%;
    height: 585px;
    display: flex;
    flex-direction: column;
    background-color: #686196;
    align-items: center;
    padding-bottom: 2rem;
`;
const RankingSectionTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    padding: 2rem 0 1rem 0;
`;
const MoreBtn = styled.div`
    width: 78%;
    text-align: right;
    color: white;
    font-size: 15px;
    padding-bottom: 0.5rem;
`;
const RankingContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    /* border: 1px solid black; */
`;
const RankingBox = styled.div`
    flex: 1;
    height: 393px;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 4px 9px 4px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    margin: 0 1rem;
`;
const RankingTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #686196;
    padding: 1rem;
`;
const RankingList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;
const RankingLi = styled.div`
    display: flex;
    flex-direction: row;
`;
const RankingNum = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #686196;
`;
const RankingName = styled.div`
    font-size: 20px;
    color: #686196;
    flex: 1;
`;
const RankingContent = styled.div`
    font-size: 18px;
    padding: 0 0.3rem;
`;

const Main = ({ history }) => {
    // const [inputText, setInputText] = useState("");
    // const id = useSe3lector((state) => state.auth.profile_id);
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
                                        <PlanetNameBox>
                                            <PlanetDot></PlanetDot>
                                            <PlanetName>{planet.name}</PlanetName>
                                        </PlanetNameBox>
                                        <PlanetInfo>{planet.category}</PlanetInfo>
                                        <PlanetInfo>{planet.level}</PlanetInfo>
                                        <PlanetInfo>{planet.person}</PlanetInfo>
                                    </PlanetBox>
                                </Link>
                            );
                        })}
                    ></Carousel>
                </div>
                <RankingSection>
                    <RankingSectionTitle>RANKING</RankingSectionTitle>
                    <MoreBtn onClick={() => movePage("ranking")}>전체 보기 ></MoreBtn>
                    <RankingContainer>
                        <RankingBox>
                            <RankingTitle>PLANET 랭킹</RankingTitle>
                            <RankingList>
                                <RankingLi>
                                    <RankingNum>1</RankingNum>
                                    <RankingName>토익뿌시기</RankingName>
                                    <RankingContent>영어</RankingContent>
                                    <RankingContent>초급</RankingContent>
                                    <RankingContent>3/5</RankingContent>
                                    <RankingContent>경험치</RankingContent>
                                </RankingLi>
                            </RankingList>
                        </RankingBox>
                        <RankingBox>
                            <RankingTitle>여행자 랭킹</RankingTitle>
                            <RankingList>
                                <RankingLi>
                                    <RankingNum>1</RankingNum>
                                    <RankingName>민죠죠</RankingName>
                                    <RankingContent>1235 EXP</RankingContent>
                                </RankingLi>
                            </RankingList>
                        </RankingBox>
                    </RankingContainer>
                </RankingSection>

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
