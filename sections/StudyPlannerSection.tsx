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
                        onPress={null}
                        title="공부하기"
                        btnColor="#fff"
                        textColor="#297bff"
                        btnStyle={{}}
                    />
                </View>
            </View>
            <View style={ styles.studyPlanner }>
                <Text style={{ flex: 1, fontSize: 17, lineHeight: 20, }}>
                    남은 기간:
                    <Text style={{ fontWeight: 'bold', color: "#0047ba", }}> D-2</Text>
                    {"\n"}
                    오늘 공부한 시간:
                    <Text style={{ fontWeight: 'bold', color: "#0047ba", }}> 12시간 10분</Text>
                    {"\n"}
                    <Text style={{ fontSize: 12, color: '#777', }}>
                        어제보다 2시간 더 공부했어요!
                    </Text>
                </Text>
            </View>
        </View>
    );
}

export default StudyPlannerSection;