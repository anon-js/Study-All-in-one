import React from "react";
import styled from "styled-components/native";
import { SectionView } from '../styles';
import { TitleBar } from "../Views/TitleBar";

const StudyPlanner = styled.View`
    flex: 1;
    height: 70px;
`

const SpanText = styled.Text`
    flex: 1;
    font-size: 17px;
    line-height: 20px;
    color: #000;
    font-family: 'Pretendard-Regular';
`

const PointText = styled.Text`
    font-family: 'Pretendard-Bold';
    color: #0047ba;
`

const DetailText = styled.Text`
    font-size: 12px;
    color: #777;
    font-family: 'Pretendard-Regular';
`

const StudyPlannerSection = () => {
    return (
        <SectionView>
            <TitleBar title="공부 계획표" btnTitle="공부하기" onPress={null}/>
            <StudyPlanner>
                <SpanText>
                    남은 기간: <PointText>D-2</PointText>
                    {"\n"}
                    오늘 공부한 시간: <PointText>12시간 10분</PointText>
                    {"\n"}
                    <DetailText>어제보다 2시간 더 공부했어요!</DetailText>
                </SpanText>
            </StudyPlanner>
        </SectionView>
    );
}

export default StudyPlannerSection;