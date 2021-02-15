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

const Title = styled.div`
    padding: 3rem;
`;

const RatingContainer = styled.div`
    display: flex;
    border: 1px solid black;
    width: 90%;
    padding: 1rem 0;
`;
const RatingBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    flex: 1;
`;
const GoodRating = styled.div`
    color: blue;
    padding: 1rem 0;
`;
const BadRating = styled.div`
    color: red;
    padding: 1rem 0;
`;

const AchieveContainer = styled.div`
    display: flex;
    border: 1px solid black;
    width: 90%;
    padding: 1rem;
    flex-wrap: wrap;
`;
const Achieve = styled.div`
    width: 20%;
    height: 100px;
    border: 1px solid black;
    margin: 1rem;
`;

const PlanetContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 90%;
    align-items: center;
`;
const PlanetBox = styled.div`
    width: 90%;
    border: 1px solid black;
    margin: 1rem 0;
`;

const Mypage = ({ history }) => {
    const movePage = (page) => {
        history.push(`/${page}`);
    };

    const goods = ["성실해요", "열정적이에요", "적극적이에요", "보통이에요"];
    const bads = ["지각이 잦아요", "공유도가 낮아요", "소극적이에요"];

    const achieves = ["업적 1", "업적 2", "업적 1", "업적 1", "업적 1", "업적 1", "업적 1", "업적 1"];

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
                        {goods.map((good) => {
                            return <GoodRating>{good}</GoodRating>;
                        })}
                    </RatingBox>
                    <RatingBox>
                        {bads.map((bad) => {
                            return <BadRating>{bad}</BadRating>;
                        })}
                    </RatingBox>
                </RatingContainer>

                <Title>내 업적</Title>
                <AchieveContainer>
                    {achieves.map((achieve) => {
                        return <Achieve>{achieve}</Achieve>;
                    })}
                </AchieveContainer>

                <Title>나의 PLANET</Title>
                <PlanetContainer>
                    {planets.map((planet) => {
                        return <PlanetBox>{planet.name}</PlanetBox>;
                    })}
                </PlanetContainer>
            </Wrapper>
        </React.Fragment>
    );
};

export default Mypage;
