import React from "react";
import styled from "styled-components/native";
import { SectionView } from '../styles';
import { TitleBar } from "../Views/TitleBar";
import { TodoItem } from "../Views/TodoItem";

const Todos = styled.ScrollView`
    display: flex;
    flex-direction: row;
`

const TodoSection = () => {
    return (
        <SectionView>
            <TitleBar title="오늘의 할 일" btnTitle="할 일 추가" onPress={null}/>
            <Todos horizontal={true}>
                <TodoItem title="숙제하기" n={0}/>
                <TodoItem title="공부하기" n={1}/>
                <TodoItem title="민호바보" n={2}/>
                <TodoItem title="환수바보" n={3}/>
            </Todos>
        </SectionView>
    );
}

export default TodoSection;