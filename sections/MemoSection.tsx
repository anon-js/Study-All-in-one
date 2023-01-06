import React from "react";
import { View, Text } from "react-native";
import Button from '../components/Button';
import styles from '../styles';

const MemoSection = () => {
    return (
        <View style={ styles.section }>
        <View style={ styles.topTextView}>
            <View style={ styles.titleView }>
            <Text style={ styles.titleText }>
                메모 
            </Text>
            <Text style={ styles.subTitleText }>
                심부름 할 것들
            </Text>
            </View>
            <View style={ styles.btnView }>
            <Button
                btnWidth={75}
                btnHeight={30}
                onPress={{}}
                title="메모 추가"
                btnColor="#E3E9FF"
                titleColor="#4664CF"
                btnStyle={{}}
            />
            </View>
        </View>
        <View style={ styles.memo }>
            <Text>
            대파 2단{'\n'}
            양파 한 봉지{'\n'}
            깻잎 싼거 하나{'\n'}
            케찹 오뚜기
            </Text>
        </View>
        </View>
    );
}

export default MemoSection;