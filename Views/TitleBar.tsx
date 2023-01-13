import React from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';

const TitleView = styled.View`
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

const TitleText = styled.Text`
    color: #000;
    font-size: 20px;
    font-family: 'Pretendard-Bold';
`


type titleProps = {
    title: string,
    btnTitle: string,
    onPress: any,
}

export const TitleBar: React.FC<titleProps> = ({ title, btnTitle, onPress }) => {
    return (
        <TitleView>
            <TitleText>{title}</TitleText>
            <Button
                btnWidth={80}
                btnHeight={30}
                onPress={onPress}
                title={btnTitle}
                btnColor="#fff"
                textColor="#297bff"
            />
        </TitleView>
    );
}