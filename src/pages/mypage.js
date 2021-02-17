import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import achieve0 from "../assets/achieve0.png";
import achieve1 from "../assets/achieve1.png";
import achieve2 from "../assets/achieve2.png";
import achieve3 from "../assets/achieve3.png";
import achieve4 from "../assets/achieve4.png";
import achieve5 from "../assets/achieve5.png";
import achieve6 from "../assets/achieve6.png";
import achieve7 from "../assets/achieve7.png";
import { Link } from "react-router-dom";
import level0 from "../assets/level0.png";
import level1 from "../assets/level1.png";
import level2 from "../assets/level2.png";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 80%;
    font-size: 24px;
    font-weight: bold;
    color: #686196;
    padding: 2rem 0 1rem 0;
`;

const RatingContainer = styled.div`
    display: flex;
    /* border: 1px solid black; */
    width: 90%;
`;
const RatingTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #7984a7;
    padding-top: 25px;
`;
const RatingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 16px;
    box-shadow: 0 4px 9px 4px rgba(0, 0, 0, 0.25);
    flex: 1;
    padding: 0 1rem 1rem 1rem;
`;
const RatingList = styled.div`
    height: 207px;
    width: 90%;
`;
const RatingLi = styled.div`
    height: 44px;
    border-radius: 4px;
    margin: 25px 0;
    background-color: rgba(121, 132, 167, 0.2);
    display: flex;
    align-items: center;
    padding-left: 20px;
`;
const AchieveSection = styled.div`
    margin-top: 6rem;
    width: 100%;
    background-color: #7d6599;
    padding-bottom: 4rem;
`;
const AchieveTitle = styled.div`
    padding: 33px 0;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
`;
const AchieveContainer = styled.div`
    margin: 0 auto;
    display: flex;
    width: 85%;
    flex-wrap: wrap;
    background-color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 0 4px 9px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    padding: 1rem;
`;
const Achieve = styled.div`
    width: 17%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 2rem;
`;
const AchieveImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100px;
`;
const AchieveName = styled.div`
    padding: 1rem 0;
    font-size: 13px;
`;
const PlanetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`;
const PlanetBox = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 10px 3px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    margin: 10px 0;
    display: flex;
    padding: 2rem;
    flex-direction: row;
`;
const PlanetImgBox = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 100px;
    border: solid 6px #686196;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const PlanetImg = styled.img`
    object-fit: contain;
`;
const PlanetContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    width: 80%;
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
    margin: 10px 10px;
`;
const PlanetName = styled.div`
    font-size: 20px;
    color: #212121;
    text-decoration: none;
`;
const PlanetInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 0.5rem;
    /* padding-left: 1.5rem; */
`;
const PlanetInfo = styled.div`
    width: 25%;
    height: 44px;
    border-radius: 4px;
    background-color: rgba(121, 132, 167, 0.15);
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-left: 2rem;
    color: black;
`;

const Mypage = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const goods = ["성실해요", "열정적이에요", "적극적이에요", "또 같이 하고 싶어요"];
    const bads = ["지각이 잦아요", "공유도가 낮아요", "소극적이에요", "별로에요"];

    const achieves = [
        { name: "PLANET 1개 탐사 완료", image: achieve0 },
        { name: "체크리스트 달성률 100%", image: achieve1 },
        { name: "PLANET 탐사 참여도 100%", image: achieve2 },
        { name: "PLANET 10개 탐사 완료", image: achieve3 },
        { name: "긍정적인 평가 10개 달성", image: achieve4 },
        { name: "PLANET 15개 탐사 완료", image: achieve5 },
        { name: "모든 카테고리 탐사 완료", image: achieve6 },
        { name: "PLANET 20개 탐사 완료", image: achieve7 },
    ];

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
                <Title>내가 받은 평가들</Title>
                <RatingContainer>
                    <RatingBox>
                        <RatingTitle>이런 점이 훌륭해요</RatingTitle>
                        <RatingList>
                            {goods.map((good) => {
                                return <RatingLi>{good}</RatingLi>;
                            })}
                        </RatingList>
                    </RatingBox>
                    <RatingBox>
                        <RatingList style={{ paddingTop: "55px" }}>
                            {bads.map((bad) => {
                                return <RatingLi style={{ backgroundColor: "rgba(150, 97, 97, 0.05)" }}>{bad}</RatingLi>;
                            })}
                        </RatingList>
                        <RatingTitle style={{ paddingTop: "9rem", color: "#966161" }}>이런 점이 아쉬워요</RatingTitle>
                    </RatingBox>
                </RatingContainer>
                <AchieveSection>
                    <AchieveTitle>내 업적</AchieveTitle>
                    <AchieveContainer>
                        {achieves.map((achieve) => {
                            return (
                                <Achieve>
                                    <AchieveImg src={achieve.image}></AchieveImg>
                                    <AchieveName>{achieve.name}</AchieveName>
                                </Achieve>
                            );
                        })}
                    </AchieveContainer>
                </AchieveSection>
                <Title>나의 PLANET</Title>
                <PlanetContainer>
                    {planets.map((planet) => {
                        return (
                            <Link to={`/planet/detail/${planet.id}`}>
                                <PlanetBox>
                                    <PlanetImgBox>
                                        <PlanetImg src={level0}></PlanetImg>
                                    </PlanetImgBox>
                                    <PlanetContent>
                                        <PlanetNameBox>
                                            <PlanetDot></PlanetDot>
                                            <PlanetName>{planet.name}</PlanetName>
                                        </PlanetNameBox>
                                        <PlanetInfoBox>
                                            <PlanetInfo>{planet.category}</PlanetInfo>
                                            <PlanetInfo>{planet.level}</PlanetInfo>
                                            <PlanetInfo>{planet.person}</PlanetInfo>
                                        </PlanetInfoBox>
                                    </PlanetContent>
                                </PlanetBox>
                            </Link>
                        );
                    })}
                </PlanetContainer>
            </Wrapper>
        </React.Fragment>
    );
};

export default Mypage;
