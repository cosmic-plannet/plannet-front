import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";
import Slider from "../../components/slider";
import LeaderIcon from "../../assets/leader.png";
import memberIcon from "../../assets/member.png";
import CheckBox from "../../components/checkbox";
import CheckBoxDone from "../../components/checkboxDone";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PlanetInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 52px;
`;
const LeaderImg = styled.img`
    width: 45px;
    height: 45px;
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
    font-size: 24px;
    color: #212121;
    text-decoration: none;
`;
const GrowthTitle = styled.div`
    padding: 1rem 0;
    font-size: 20px;
    color: #686196;
`;
const GrowthBox = styled.div``;
const GrowthBtnBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const StudyCompleteBtn = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    background-color: #686196;
    border-radius: 4px;
    color: white;
    margin: 0 1rem;
    :disabled {
        background-color: white;
        border: 1px solid #686196;
        color: #686196;
    }
`;
const RecruitCompleteBtn = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    background-color: #686196;
    border-radius: 4px;
    color: white;
    margin: 0 1rem;
`;
const StartBtn = styled.button`
    width: 250px;
    height: 46px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 4px;
    background-color: #686196;
    margin: 1rem 0;
    a {
        color: white;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 70%;
    width: 80%;
    /* border: 1px solid black; */
`;
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1rem;
    height: 100%;
`;
const ContentTitle = styled.div`
    text-align: left;
    width: 100%;
    padding: 1rem 0 0.5rem 0;
    font-size: 24px;
    color: #686196;
    font-weight: bold;
`;
const MemberContainer = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 9px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
`;
const MemberBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
`;
const MemberImgBox = styled.div`
    width: 84px;
    height: 84px;
    border: solid 6px #686196;
    border-radius: 100px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const MemberImg = styled.img`
    width: 49px;
    height: 49px;
`;
const MemberInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem 0;
`;
const MemberInfo = styled.div`
    padding: 0 1rem;
`;
const TodoContainer = styled.div`
    border-radius: 4px;
    box-shadow: 0 4px 9px 4px rgba(0, 0, 0, 0.25);
    height: 100%;
`;
const TodoTab = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
`;
const DoingTitle = styled.div`
    flex: 1;
    width: 30%;
    height: 28px;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    text-align: center;
    padding-top: 2px;
    margin: 10px;
    background-color: ${(props) => {
        if (props.doing) {
            return "#7984a7";
        } else {
            return "#ebedf2";
        }
    }};
`;
const DoneTitle = styled.div`
    flex: 1;
    width: 30%;
    height: 28px;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    text-align: center;
    padding-top: 2px;
    margin: 10px;
    background-color: ${(props) => {
        if (!props.doing) {
            return "#7984a7";
        } else {
            return "#ebedf2";
        }
    }};
`;
const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 0 auto;
`;
const Li = styled.div`
    display: flex;
    align-items: center;
`;
const Doing = styled.div``;
const Done = styled.div`
    text-decoration: line-through;
`;

const PlanetDetail = ({ match, history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    let isLeader = true;
    let isMember = true;

    let members = [
        { name: "m1", attend: 90, todo: 80 },
        { name: "m2", attend: 80, todo: 70 },
    ];
    let todos = [
        { content: "todo1", complete: true },
        { content: "todo2", complete: true },
        { content: "todo3", complete: false },
        { content: "todo4", complete: false },
    ];

    const [DoingTab, SetDoingTab] = useState(true);

    const [complete, setComplete] = useState(false);
    const [growth, setGrowth] = React.useState(20);
    const handleChange = (event, newValue) => {
        setGrowth(newValue);
        if (newValue === 100) {
            //console.log("complete");
            setComplete(true);
        } else {
            setComplete(false);
        }
    };

    // const [checked, setChecked] = React.useState(true);
    // const handleCheck = (event) => {
    //     setChecked(event.target.checked);
    // };

    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <PlanetInfoBox>
                    <LeaderImg src={LeaderIcon}></LeaderImg>
                    <PlanetNameBox>
                        <PlanetDot></PlanetDot>
                        <PlanetName>한 달만에 토익 뿌시기</PlanetName>
                    </PlanetNameBox>
                    <GrowthTitle>PLANET 성장도</GrowthTitle>
                    <GrowthBox>
                        <Slider value={growth} handleChange={handleChange}></Slider>
                        <GrowthBtnBox>
                            {isMember && isLeader ? (
                                <StudyCompleteBtn disabled={complete ? false : true} onClick={() => movePage("evaluation")}>
                                    {complete ? "탐사 완료" : "진행중"}
                                </StudyCompleteBtn>
                            ) : (
                                <div>진행중</div>
                            )}
                            {isMember && isLeader ? <RecruitCompleteBtn>모집완료</RecruitCompleteBtn> : null}
                        </GrowthBtnBox>
                    </GrowthBox>
                    {isMember ? (
                        <StartBtn>
                            <a href="https://meet.google.com/iwy-wsqq-qim" target="_blank">
                                탐사 시작하기
                            </a>
                        </StartBtn>
                    ) : (
                        <StartBtn>탐사대 가입하기</StartBtn>
                    )}
                </PlanetInfoBox>
                <ContentContainer>
                    <ContentBox>
                        <ContentTitle>MEMBER</ContentTitle>
                        <MemberContainer>
                            {members.map((member) => {
                                return (
                                    <MemberBox>
                                        <MemberImgBox>
                                            <MemberImg src={memberIcon}></MemberImg>
                                        </MemberImgBox>
                                        <MemberInfoBox>
                                            <MemberInfo>{member.name}</MemberInfo>
                                            <MemberInfo>{member.attend}</MemberInfo>
                                            <MemberInfo>{member.todo}</MemberInfo>
                                        </MemberInfoBox>
                                    </MemberBox>
                                );
                            })}
                        </MemberContainer>
                    </ContentBox>
                    <ContentBox>
                        <ContentTitle>MY CHECKLIST</ContentTitle>
                        <TodoContainer>
                            <TodoTab>
                                <DoingTitle doing={DoingTab} onClick={() => SetDoingTab(true)}>
                                    TO DO
                                </DoingTitle>
                                <DoneTitle doing={DoingTab} onClick={() => SetDoingTab(false)}>
                                    Complete
                                </DoneTitle>
                            </TodoTab>
                            <TodoList>
                                {DoingTab
                                    ? todos
                                          .filter((todo) => todo.complete === true)
                                          .map((todo) => {
                                              return (
                                                  <Li>
                                                      <CheckBox done={false}></CheckBox>
                                                      <Doing>{todo.content}</Doing>
                                                  </Li>
                                              );
                                          })
                                    : todos
                                          .filter((todo) => todo.complete === false)
                                          .map((todo) => {
                                              return (
                                                  <Li>
                                                      <CheckBoxDone done={true}></CheckBoxDone>
                                                      <Done>{todo.content}</Done>
                                                  </Li>
                                              );
                                          })}
                            </TodoList>
                        </TodoContainer>
                    </ContentBox>
                </ContentContainer>
            </Wrapper>
        </React.Fragment>
    );
};

export default PlanetDetail;
