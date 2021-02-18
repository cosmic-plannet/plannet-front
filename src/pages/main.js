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
    margin: 10px 10px;
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
    border-raius: 4px;
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
    padding: 0.8rem 0;
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
        { name: "자료구조 스터디", category: "컴퓨터", level: "중급", person: "5명", id: 0 },
        { name: "토익 990점", category: "영어", level: "고급", person: "8명", id: 1 },
        { name: "올해에 NCS 붙을 사람들", category: "시험", level: "중급", person: "10명", id: 2 },
        { name: "공기업 면접 스터디", category: "취직/면접", level: "고급", person: "4명", id: 3 },
        { name: "정처기 한번에 끝내기", category: "자격증", level: "중급", person: "7명", id: 4 },
    ];

    let planetRanking = [
        { name: "토익 990점", category: "영어", level: "전문가", person: "8명", exp: 19274, id: 0 },
        { name: "토린이 모여", category: "영어", level: "초급", person: "10명", exp: 12859, id: 1 },
        { name: "장고 프로젝트", category: "컴퓨터", level: "중급", person: "4명", exp: 15211, id: 2 },
        { name: "컴활 1급", category: "자격증", level: "전문가", person: "6명", exp: 11859, id: 3 },
        { name: "ISTQB 필합", category: "컴퓨터", level: "고급", person: "5명", exp: 10343, id: 3 },
    ];
    let userRanking = [
        { name: "민호지", exp: 12462, id: 0 },
        { name: "최현지", exp: 11812, id: 0 },
        { name: "이은규", exp: 10012, id: 0 },
        { name: "조현규", exp: 9910, id: 0 },
        { name: "박단비", exp: 7820, id: 0 },
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
                                {planetRanking.map((planet, index) => {
                                    return (
                                        <RankingLi>
                                            <RankingNum>{index + 1}</RankingNum>
                                            <RankingName>{planet.name}</RankingName>
                                            <RankingContent>{planet.category}</RankingContent>
                                            <RankingContent>{planet.level}</RankingContent>
                                            <RankingContent>{planet.person}</RankingContent>
                                            <RankingContent>{planet.exp}</RankingContent>
                                        </RankingLi>
                                    );
                                })}
                            </RankingList>
                        </RankingBox>
                        <RankingBox>
                            <RankingTitle>여행자 랭킹</RankingTitle>
                            <RankingList>
                                {userRanking.map((user, index) => {
                                    return (
                                        <RankingLi>
                                            <RankingNum>{index + 1}</RankingNum>
                                            <RankingName>{user.name}</RankingName>
                                            <RankingContent>{user.exp}</RankingContent>
                                        </RankingLi>
                                    );
                                })}
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
