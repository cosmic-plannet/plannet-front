import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import { Select } from "antd";

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
const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #686196;
    padding: 68px 0;
`;
const RankingSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`;
const RankingContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    /* border: 1px solid black; */
`;
const RankingBox = styled.div`
    height: 393px;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 4px 9px 4px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    margin: 0 1rem;
    /* border: 1px solid black; */
`;
const RankingTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #686196;
    padding: 1rem;
    text-align: center;
`;
const RankingList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;
const RankingLi = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.6rem 0;
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

const Ranking = ({ history }) => {
    // const [inputText, setInputText] = useState("");
    // const id = useSelector((state) => state.auth.profile_id);
    // const dispatch = useDispatch();

    // useEffect(() => {});
    let planetRanking = [
        { name: "토익 990점", category: "영어", level: "전문가", person: "8명", exp: 19274, id: 0 },
        { name: "토린이 모여", category: "영어", level: "초급", person: "10명", exp: 12859, id: 1 },
        { name: "장고 플젝", category: "컴퓨터", level: "중급", person: "4명", exp: 15211, id: 2 },
        { name: "컴활 1급", category: "자격증", level: "전문가", person: "6명", exp: 11859, id: 3 },
        { name: "ISTQB 필합", category: "컴퓨터", level: "고급", person: "5명", exp: 10343, id: 3 },
        { name: "오픽 AL 따자", category: "영어", level: "고급", person: "3명", exp: 9883, id: 3 },
        { name: "토스 7이상 목표", category: "영어", level: "고급", person: "6명", exp: 8762, id: 3 },
    ];
    let userRanking = [
        { name: "민호지", exp: 18462, id: 0 },
        { name: "최현지", exp: 17812, id: 0 },
        { name: "이은규", exp: 16012, id: 0 },
        { name: "조현규", exp: 15010, id: 0 },
        { name: "박단비", exp: 14420, id: 0 },
        { name: "김부각", exp: 12712, id: 0 },
        { name: "김해진", exp: 10705, id: 0 },
    ];
    let englishRanking = [
        { name: "토익 990점", category: "영어", level: "전문가", person: "8명", exp: 19274, id: 0 },
        { name: "토린이 모여", category: "영어", level: "초급", person: "10명", exp: 12859, id: 1 },
        { name: "오픽 AL 따자", category: "영어", level: "고급", person: "3명", exp: 9883, id: 3 },
        { name: "토스 7이상 목표", category: "영어", level: "고급", person: "6명", exp: 8762, id: 3 },
        { name: "유학 준비방", category: "영어", level: "고급", person: "3명", exp: 7238, id: 3 },
        { name: "오픽 IM 넘기", category: "영어", level: "중급", person: "9명", exp: 7023, id: 3 },
        { name: "해커스 700+", category: "영어", level: "중급", person: "14명", exp: 6932, id: 3 },
    ];
    let eRanking = [
        { name: "HSK", category: "제2외국어", level: "중급", person: "7명", exp: 12985, id: 0 },
        { name: "JLPT", category: "제2외국어", level: "고급", person: "5명", exp: 11985, id: 0 },
        { name: "HSK7급", category: "제2외국어", level: "고급", person: "6명", exp: 11629, id: 0 },
        { name: "DELE", category: "제2외국어", level: "중급", person: "3명", exp: 9572, id: 0 },
        { name: "러시아어", category: "제2외국어", level: "초급", person: "4명", exp: 8563, id: 0 },
        { name: "일본어", category: "제2외국어", level: "고급", person: "4명", exp: 7175, id: 0 },
        { name: "스페인어", category: "제2외국어", level: "초급", person: "5명", exp: 5967, id: 0 },
    ];

    const selects = ["영어", "컴퓨터", "취직/면접", "제2외국어", "자격증", "시험"];
    const { Option } = Select;
    const [here, setHere] = useState(0);
    const handleChange = (value) => {
        setHere(value);
        console.log(`selected ${value}`);
    };

    const movePage = (page) => {
        history.push(`/${page}`);
    };

    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <Title>RANKING</Title>
                <RankingSection>
                    <RankingContainer>
                        <RankingTitle>PLANET 랭킹</RankingTitle>
                        <RankingBox>
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
                    </RankingContainer>
                    <RankingContainer>
                        <RankingTitle>여행자 랭킹</RankingTitle>
                        <RankingBox>
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
                    <RankingContainer>
                        <RankingTitle>
                            <Select
                                defaultValue={selects[0]}
                                style={{ width: 120, fontSize: "18px", color: "#686196" }}
                                bordered={false}
                                onChange={handleChange}
                            >
                                {selects.map((select, index) => {
                                    return <Option value={index}>{select}</Option>;
                                })}
                            </Select>
                        </RankingTitle>
                        <RankingBox>
                            {here === 0 ? (
                                <RankingList>
                                    {englishRanking.map((planet, index) => {
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
                            ) : (
                                <RankingList>
                                    {eRanking.map((planet, index) => {
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
                            )}
                        </RankingBox>
                    </RankingContainer>
                </RankingSection>
            </Wrapper>
        </React.Fragment>
    );
};

export default Ranking;
