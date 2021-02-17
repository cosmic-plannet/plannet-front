import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import LeaderIcon from "../assets/leader.png";
import MemberIcon from "../assets/member.png";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LeaderImg = styled.img`
    width: 45px;
    /* height: 45px; */
    padding-top: 2rem;
`;
const PlanetTitleBox = styled.div`
    display: flex;
`;
const PlanetDot = styled.div`
    width: 13px;
    height: 13px;
    background-color: #7984a7;
    border-radius: 1000px;
    margin: 10px 10px;
`;
const PlanetTitle = styled.div`
    font-size: 24px;
`;
const MemberBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1.5rem 0 1rem 0;
    /* width: 100 */
`;
const MemberImgBox = styled.div`
    width: 130px;
    height: 130px;
    border: solid 6px #686196;
    border-radius: 1000px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const MemberImg = styled.img`
    width: 75px;
    height: 75px;
`;
const Prev = styled.div`
    padding: 100px 36px 0 0;
    color: #686196;
    font-size: 18px;
`;
const Next = styled.div`
    padding: 100px 0 0 36px;
    color: #686196;
    font-size: 18px;
`;
const MemberInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 4rem;
`;
const MemberInfo = styled.div`
    padding: 0 1rem;
`;
const EvaluateBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    width: 90%;
    /* margin-left: 6rem; */
`;
const Evaluate = styled.button`
    width: 18%;
    height: 106px;
    margin: 2rem;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 4px 10px 3px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;

    :hover {
        background-color: #686196;
    }
`;
const CompleteBtn = styled.button`
    margin-top: 3rem;
    width: 125px;
    height: 40px;
    border-radius: 4px;
    font-size: 18px;
    border: solid 5px #686196;
    background-color: #686196;
    color: white;
`;

const Evaluation = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const evaluations = [
        "성실해요",
        "열정적이에요",
        "적극적이에요",
        "또 같이 하고 싶어요",
        "보통이에요",
        "지각이 잦아요",
        "공유도가 낮아요",
        "소극적이에요",
    ];
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
                <LeaderImg src={LeaderIcon}></LeaderImg>
                <PlanetTitleBox>
                    <PlanetDot></PlanetDot>
                    <PlanetTitle>한 달만에 토익 뿌시기</PlanetTitle>
                </PlanetTitleBox>
                <MemberBox>
                    <Prev onClick={() => setIndex(index - 1)}>이전</Prev>
                    <MemberImgBox>
                        <MemberImg src={MemberIcon}></MemberImg>
                    </MemberImgBox>
                    <Next onClick={() => setIndex(index + 1)}>다음</Next>
                </MemberBox>
                <MemberInfoBox>
                    <MemberInfo>{members[index].name}</MemberInfo>
                    <MemberInfo>{members[index].attend}</MemberInfo>
                    <MemberInfo>{members[index].todo}</MemberInfo>
                </MemberInfoBox>
                <EvaluateBox>
                    {evaluations.map((evaluation, index) => {
                        return <Evaluate onClick={() => select(index)}>{evaluation}</Evaluate>;
                    })}
                </EvaluateBox>
                <CompleteBtn
                    onClick={() => {
                        complete();
                        movePage("complete");
                    }}
                    disabled={index === members.length - 1 ? false : true}
                >
                    선택 완료
                </CompleteBtn>
            </Wrapper>
        </React.Fragment>
    );
};

export default Evaluation;
