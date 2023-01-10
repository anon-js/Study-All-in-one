import React from "react";
import { View, Text } from "react-native";
import Button from '../components/Button';
import MemoButton from "../components/MemoButton";
import styles from '../styles';

const MemoSection = () => {
    return (
        <View style={ styles.section }>
        <View style={ styles.topTextView }>
            <View style={ styles.titleView }>
                <Text style={ styles.titleText }>
                    메모 
                </Text>
            </View>
            <View style={ styles.btnView }>
                <Button
                    btnWidth={75}
                    btnHeight={30}
                    onPress={null}
                    title="메모 추가"
                    btnColor="#fff"
                    textColor="#297bff"
                    btnStyle={{}}
                />
            </View>
        </View>
            <MemoButton style={ styles.memo } text={ "대파 2단\n양파 한 봉지\n깻잎 싼거 하나\n케찹 오뚜기" } onPress={null}/>
        </View>
    );
}

export default MemoSection;