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
    const selects = ["영어", "컴퓨터", "취직/면접", "제2외국어", "자격증", "시험"];
    const { Option } = Select;
    const handleChange = (value) => {
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
                    </RankingContainer>
                    <RankingContainer>
                        <RankingTitle>여행자 랭킹</RankingTitle>
                        <RankingBox>
                            <RankingList>
                                <RankingLi>
                                    <RankingNum>1</RankingNum>
                                    <RankingName>민죠죠</RankingName>
                                    <RankingContent>1235 EXP</RankingContent>
                                </RankingLi>
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
                    </RankingContainer>
                </RankingSection>
            </Wrapper>
        </React.Fragment>
    );
};

export default Ranking;
