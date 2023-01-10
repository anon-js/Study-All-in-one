import React from "react";
import { View, Text } from "react-native";
import styles from '../styles';

type MainProps = {
    name: string,
    msg: string,
}

const Main: React.FC<MainProps> = ({ name, msg }) => {
    return (
        <View style={ styles.topView }>
            <Text style={ styles.name }>
                {name}님
            </Text>
            <Text style={ styles.msg }>
                {msg}
            </Text>
        </View>
    );
}

export default Main;