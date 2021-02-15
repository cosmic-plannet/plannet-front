import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
//import { getQuestion, getToday } from "store/box";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.img``;

const Title = styled.div`
    font-size: 30px;
    padding: 1rem 0;
`;

const SubTitle = styled.div``;

const LoginBtn = styled.button`
    border: 1px solid black;
    width: 100px;
    background-color: white;
    margin-top: 1rem;
`;

const Main = ({ history }) => {
    // const [inputText, setInputText] = useState("");
    // const id = useSelector((state) => state.auth.profile_id);
    // const dispatch = useDispatch();

    // useEffect(() => {});

    // const move = () => {
    //     history.push("/record");
    // };

    return <div></div>;
};

export default Main;
