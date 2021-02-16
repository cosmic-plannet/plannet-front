import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header";

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
`;
const LeaderImg = styled.div`
    
`;
const Title = styled.div`
    padding-top: 3rem;
`;
const GrowthTitle = styled.div`
    padding: 1rem 0;
`;
const GrowthBox = styled.div``;
const StudyCompleteBtn = styled.button``;
const RecruitCompleteBtn = styled.button``;
const StartBtn = styled.button`
    margin: 1rem 0;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 40%;
    width: 80%;
`;
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    //border: 1px solid black;
    margin: 1rem;
`;
const ContentTitle = styled.div`
    text-align: left;
    width: 100%;
    padding: 1rem 0;
`;
const MemberContainer = styled.div`
    border: 1px solid black;
    height: 90%;
`;
const MemberBox = styled.div`
    display: flex;
    flex-direction: column;
`;
const MemberImg = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
`;
const MemberInfoBox = styled.div`
    display: flex;
    flex-direction: row;
`;
const MemberInfo = styled.div`
    padding: 0 1rem;
`;
const TodoContainer = styled.div`
    border: 1px solid black;
    height: 90%;
`;
const TodoTab = styled.div`
    display: flex;
    flex-direction: row;
`;
const DoingTitle = styled.div`
    flex: 1;
`;
const DoneTitle = styled.div`
    flex: 1;
`;
const TodoList = styled.div`
    display: flex;
    flex-direction: column;
`;
const Doing = styled.div``;
const Done = styled.div`
    text-decoration: line-through;
`;

const PlanetDetail = ({ match }) => {
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

    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <PlanetInfoBox>
                    <LeaderImg>난 리더다</LeaderImg>
                    <Title>한 달만에 토익 뿌시기</Title>
                    <GrowthTitle>PLANET 성장도</GrowthTitle>
                    <GrowthBox>
                        슬라이더
                        {isMember && isLeader ? <StudyCompleteBtn>진행중(100%일때 탐사완료로 변경)</StudyCompleteBtn> : <div>진행중</div>}
                        {isMember && isLeader ? <RecruitCompleteBtn>모집완료</RecruitCompleteBtn> : null}
                    </GrowthBox>
                    {isMember ? <StartBtn>탐사 시작하기</StartBtn> : <StartBtn>탐사대 가입하기</StartBtn>}
                </PlanetInfoBox>
                <ContentContainer>
                    <ContentBox>
                        <ContentTitle>MEMBER</ContentTitle>
                        <MemberContainer>
                            {members.map((member) => {
                                return (
                                    <MemberBox>
                                        <MemberImg>이미지</MemberImg>
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
                        <ContentTitle>CHECKLIST</ContentTitle>
                        <TodoContainer>
                            <TodoTab>
                                <DoingTitle onClick={() => SetDoingTab(true)}>Doing</DoingTitle>
                                <DoneTitle onClick={() => SetDoingTab(false)}>Done</DoneTitle>
                            </TodoTab>
                            <TodoList>
                                {DoingTab
                                    ? todos
                                          .filter((todo) => todo.complete === true)
                                          .map((todo) => {
                                              return <Doing>{todo.content}</Doing>;
                                          })
                                    : todos
                                          .filter((todo) => todo.complete === false)
                                          .map((todo) => {
                                              return <Done>{todo.content}</Done>;
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
