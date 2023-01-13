import React from "react";
import styled from "styled-components/native";
import { SectionView } from "../styles";
import { DateView } from "../Views/DateView";
import { TitleBar } from "../Views/TitleBar";

const DateSectionView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 30px 0 20px;
`

const CalenderSection = () => {
    let today = new Date();
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1))
    let tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
    let day = ['일', '월', '화', '수', '목', '금', '토'];

    return (
        <SectionView>
            <TitleBar title="1월" btnTitle="달력 보기" onPress={null} />
            <DateSectionView>
                <DateView point="어제" day={ yesterday.getDay() } date={ day[yesterday.getDay()] } schedule="미노"/>
                <DateView point="오늘" day={ today.getDay() } date={ day[today.getDay()] } schedule="타우"/>
                <DateView point="내일" day={ tomorrow.getDay() } date={ day[tomorrow.getDay()] } schedule="루스"/>
            </DateSectionView>
        </SectionView>
    );
}

export default CalenderSection;