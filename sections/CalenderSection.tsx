import React from "react";
import { View, Text } from "react-native";
import Button from '../components/Button';
import styles from '../styles';

const CalenderSection = () => {
    let today = new Date();
    let tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
    let day = ['일', '월', '화', '수', '목', '금', '토'];
    return (
        <View style={[ styles.section, styles.calender ]}>
            <View style={ styles.leftView }>
                <Text style={ styles.month }>{ today.getMonth() + 1 }월</Text>
                <View>
                    <Button
                        btnWidth={75}
                        btnHeight={30}
                        onPress={null}
                        title="달력 보기"
                        btnColor="#fff"
                        textColor="#297bff"
                        btnStyle={{}}
                    />
                </View>
            </View>
            <View style={ styles.rightView }>
                <View style={ styles.dayView }>
                    <View style={ styles.point }>
                        <Text style={ styles.pointText }>오늘</Text>
                    </View>
                    <Text style={ styles.today }>{ today.getDate() } ({ day[today.getDay()] })</Text>
                    <Text style={ styles.todayCalender }>혼자 있기</Text>
                </View>
                <View style={ styles.dayView }>
                    <View style={ styles.point }>
                        <Text style={ styles.pointText }>내일</Text>
                    </View>
                    <Text style={ styles.tomorrow }>{ tomorrow.getDate() } ({ day[tomorrow.getDay()] })</Text>
                    <Text style={ styles.tomorrowCalender }>일정 없음</Text>
                </View>
            </View>
        </View>
    );
}

export default CalenderSection;