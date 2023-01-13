import React from 'react';
import styled from 'styled-components/native';

type MemoBtnProps = {
    text: string,
    onPress: any,
}

const Memo = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
`

const MemoText = styled.Text`
    font-size: 14px;
    color: #000;
    font-family: 'Pretendard-Regular';
`

const MemoButton: React.FC<MemoBtnProps> = ({ text, onPress }) => {
    return (
        <Memo onPress={onPress}>
            <MemoText>{text}</MemoText>
        </Memo>
    )
}

export default MemoButton;