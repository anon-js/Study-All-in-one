import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from '../components/Button';
import CheckBox from "../components/CheckBox";
import styles from '../styles';

const TodoSection = () => {
    const [isChecks, setChecks] = useState([false, false, false]);
    return (
        <View style={[ styles.section, styles.todoView ]}>
        <View style={ styles.topTextView }>
            <View style={ styles.titleView }>
            <Text style={ styles.titleText }>
                오늘의 할 일
            </Text>
            </View>
            <View style={ styles.btnView }>
            <Button
                btnWidth={80}
                btnHeight={30}
                onPress={{}}
                title="할 일 추가"
                btnColor="#4664CF"
                titleColor="#E3E9FF"
                btnStyle={{}}
            />
            <Button
                btnWidth={60}
                btnHeight={30}
                onPress={{}}
                title="더보기"
                btnColor="#E3E9FF"
                titleColor="#4664CF"
                btnStyle={ styles.btnStyle }
            />
            </View>
        </View>
        <View style={ styles.todo }>
            <View style={[{ backgroundColor: isChecks[0] ? '#5BD06E' : '#fff', }, { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }]}>
            <Text style={[{ color: isChecks[0] ? '#fff' : '#000', }, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>숙제하기</Text>
            <CheckBox
                n={0}
                value={isChecks[0]}
                isChecks={isChecks}
                setChecks={setChecks}
                size={30}
            />
            </View>
            <View style={[{ backgroundColor: isChecks[1] ? '#5BD06E' : '#fff', marginHorizontal: 10 }, { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }]}>
            <Text style={[{ color: isChecks[1] ? '#fff' : '#000', }, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>공부하기</Text>
                <CheckBox
                n={1}
                value={isChecks[1]}
                isChecks={isChecks}
                setChecks={setChecks}
                size={30}
                />
            </View>
            <View style={[{ backgroundColor: isChecks[2] ? '#5BD06E' : '#fff' }, { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }]}>
            <Text style={[{ color: isChecks[2] ? '#fff' : '#000', }, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>민호바보</Text>
            <CheckBox
                n={2}
                value={isChecks[2]}
                isChecks={isChecks}
                setChecks={setChecks}
                size={30}
            />
            </View>
        </View>
        </View>
    );
}

export default TodoSection;