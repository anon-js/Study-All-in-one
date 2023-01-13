import React from 'react';
import styled from 'styled-components/native';

type dateProps = {
    point: string,
    day: number,
    date: string,
    schedule: string,
}

const DayView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`

const PointView = styled.View`
    width: 50px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3eeff;
    border-radius: 50px;
`

const PointText = styled.Text`
    text-align: center;
    font-size: 14px;
    color: #0047ba;
`

const DayText = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin: 5px 0 10px 0;
`

const ScheduleText = styled.Text`
    text-align: center;
    font-size: 17px;
`

export const DateView: React.FC<dateProps> = ({ point, day, date, schedule }) => {
    return (
        <DayView>
            <PointView>
                <PointText>{point}</PointText>
            </PointView>
            <DayText>{day} ({date})</DayText>
            <ScheduleText>{schedule}</ScheduleText>
        </DayView>
    );
}