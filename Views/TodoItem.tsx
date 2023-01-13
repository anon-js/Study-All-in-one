import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/native';
import { todoChecksState } from '../State';

type todoProps = {
    title: string,
    n: number,
};

export const TodoItem: React.FC<todoProps> = ({ title, n }) => {

    const [isChecks, setChecks] = useRecoilState(todoChecksState);

    const TodoView = styled.View<{ value: boolean }>`
        width: 95px;
        height: 110px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: ${(props) => (props.value ? '#deebff' : '#fff')};
        margin-right: 10px;
    `

    const TodoText = styled.Text<{ value: boolean }>`
        color: ${(props) => (props.value ? '#0047ba' : '#000')};
        font-size: 17px;
        font-family: 'Pretendard-SemiBold';
        margin-bottom: 10px;
    `

    const CheckBox = styled.TouchableOpacity`
        background: #eee;
        width: 30px;
        height: 30px;
        border-radius: 5px;
    `

    const CheckBoxImage = styled.Image`
        width: 30px;
        height: 30px;
        background: #deebff;
    `

    return (
        <TodoView value={isChecks[n]}>
            <TodoText value={isChecks[n]}>{title}</TodoText>
            <CheckBox onPress={
                () => {
                    setChecks([
                    ...isChecks.slice(0, n),
                    !isChecks[n],
                    ...isChecks.slice(n + 1),
                    ]);
                }
            }>
            { !isChecks[n] ? <></> : <CheckBoxImage source={require('../assets/check.png')} /> }
            </CheckBox>
        </TodoView>
    );
}