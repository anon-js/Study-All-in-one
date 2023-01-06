import React from "react";
import { View, Text } from "react-native";
import Button from '../components/Button';
import styles from '../styles';

const StudyPlannerSection = () => {
    return (
        <View style={[ styles.section, styles.spView ]}>
        <View style={ styles.topTextView }>
            <View style={ styles.titleView }>
            <Text style={ styles.titleText }>
                공부 계획표
            </Text>
            </View>
            <View style={ styles.btnView }>
            <Button
                btnWidth={75}
                btnHeight={30}
                onPress={{}}
                title="공부하기"
                btnColor="#E3E9FF"
                titleColor="#4664CF"
                btnStyle={{}}
            />
            </View>
        </View>
        <View style={ styles.studyPlanner }>
            <Text style={{ flex: 1, fontSize: 20, }}>
            남은 기간:
            <Text style={{ flex: 1, fontWeight: 'bold', }}> D-2</Text>
            </Text>
            <Text style={{ flex: 1, fontSize: 20, marginTop: 10, }}>
            오늘 공부한 시간:
            <Text style={{ flex: 1, fontWeight: 'bold', }}> 12시간 10분</Text>
            </Text>
            <Text style={{ fontSize: 14, color: '#777', marginBottom: 10, }}>
            어제보다 2시간 더 공부했어요!
            </Text>
        </View>
        </View>
    );
}

export default StudyPlannerSection;