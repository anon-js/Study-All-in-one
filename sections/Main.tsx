import React from "react";
import styled from "styled-components/native";

type MainProps = {
    name: string,
    msg: string,
}

const MainView = styled.View`
    padding: 20px 30px;
`

const NameText = styled.Text`
    color: #000;
    font-size: 27px;
    font-family: 'Pretendard-Bold';
    margin-bottom: 3px;
`

const MsgText = styled.Text`
    color: #000;
    font-size: 20px;
    font-family: 'Pretendard-SemiBold';
`

const Main: React.FC<MainProps> = ({ name, msg }) => {
    return (
        <MainView>
            <NameText>
                {name}님
            </NameText>
            <MsgText>
                {msg}
            </MsgText>
        </MainView>
    );
}

export default Main;