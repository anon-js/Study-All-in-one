import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useRecoilState } from "recoil";
import Button from '../components/Button';
import CheckBox from "../components/CheckBox";
import { todoChecksState } from "../State";
import styles from '../styles';

const TodoSection = () => {
    const [todoChecks, setTodoChecks] = useRecoilState(todoChecksState);
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
                        onPress={null}
                        title="할 일 추가"
                        btnColor="#fff"
                        textColor="#297bff"
                        btnStyle={{}}
                    />
                </View>
            </View>
            <ScrollView horizontal={true} style={ styles.todo }>
                <View style={[{ backgroundColor: todoChecks[0] ? '#deebff' : '#fff', marginRight: 10 }, { width: 95, height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }]}>
                    <Text style={[{ color: todoChecks[0] ? '#0047ba' : '#000', }, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>숙제하기</Text>
                    <CheckBox
                        n={0}
                        value={todoChecks[0]}
                        isChecks={todoChecks}
                        setChecks={setTodoChecks}
                        size={30}
                    />
                </View>
                <View style={[{ backgroundColor: todoChecks[1] ? '#deebff' : '#fff', marginRight: 10 }, { width: 95, height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }]}>
                    <Text style={[{ color: todoChecks[1] ? '#0047ba' : '#000', }, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>공부하기</Text>
                    <CheckBox
                        n={1}
                        value={todoChecks[1]}
                        isChecks={todoChecks}
                        setChecks={setTodoChecks}
                        size={30}
                    />
                </View>
                <View style={[{ backgroundColor: todoChecks[2] ? '#deebff' : '#fff', marginRight: 10 }, { width: 95, height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }]}>
                    <Text style={[{ color: todoChecks[2] ? '#0047ba' : '#000', }, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>민호바보</Text>
                    <CheckBox
                        n={2}
                        value={todoChecks[2]}
                        isChecks={todoChecks}
                        setChecks={setTodoChecks}
                        size={30}
                    />
                </View>
                <View style={[{ backgroundColor: todoChecks[3] ? '#deebff' : '#fff', marginRight: 10 }, { width: 95, height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }]}>
                    <Text style={[{ color: todoChecks[3] ? '#0047ba' : '#000', }, { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }]}>환수바보</Text>
                    <CheckBox
                        n={3}
                        value={todoChecks[3]}
                        isChecks={todoChecks}
                        setChecks={setTodoChecks}
                        size={30}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default TodoSection;