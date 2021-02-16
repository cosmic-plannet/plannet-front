import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PlanetTitle = styled.div``;
const MemberBox = styled.div`
    display: flex;
    flex-direction: row;
`;
const MemberImg = styled.div`
    margin: 0 1rem;
    width: 50px;
    height: 50px;
    border: 1px solid black;
`;
const Prev = styled.div``;
const Next = styled.div``;
const MemberInfoBox = styled.div`
    display: flex;
    flex-direction: row;
`;
const MemberInfo = styled.div`
    padding: 0 1rem;
`;
const EvaluteBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 6rem;
`;
const Evaluate = styled.button`
    border: 1px solid black;
    width: 20%;
    background-color: white;
    margin: 1rem 2rem;
    height: 50px;

    :hover {
        background-color: purple;
    }
`;
const CompleteBtn = styled.button`
    border: 1px solid black;
    width: 100px;
    background-color: white;
    margin-top: 1rem;
`;

const Login = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const interests = ["영어", "컴퓨터", "취직/면접", "제2외국어", "자격증", "시험"];
    let selects = [];
    const select = (index) => {
        selects.push(index);
        // console.log(selects);
    };
    const complete = () => {
        //console.log(selects);
    };

    const [index, setIndex] = useState(0);
    let members = [
        { name: "m1", attend: 90, todo: 80 },
        { name: "m2", attend: 80, todo: 70 },
        { name: "m3", attend: 80, todo: 70 },
        { name: "m4", attend: 80, todo: 70 },
    ];

    return (
        <React.Fragment>
            <Header></Header>
            <Wrapper>
                <PlanetTitle>한 달만에 토익 뿌시기</PlanetTitle>
                <MemberBox>
                    <Prev onClick={() => setIndex(index - 1)}>이전</Prev>
                    <MemberImg>이미지</MemberImg>
                    <Next onClick={() => setIndex(index + 1)}>다음</Next>
                </MemberBox>
                <MemberInfoBox>
                    <MemberInfo>{members[index].name}</MemberInfo>
                    <MemberInfo>{members[index].attend}</MemberInfo>
                    <MemberInfo>{members[index].todo}</MemberInfo>
                </MemberInfoBox>
                <CompleteBtn disabled={index === members.length - 1 ? false : true}>선택 완료</CompleteBtn>
            </Wrapper>
        </React.Fragment>
    );
};

export default Login;
