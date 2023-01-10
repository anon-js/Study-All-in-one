import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';

type MemoBtnProps = {
  text: string,
  onPress: any,
  style: any,
}

const MemoButton: React.FC<MemoBtnProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={ style } onPress={onPress}>
      <Text style={{ fontSize: 15 }}>
        { text }
      </Text>
    </TouchableOpacity>
  )
}

export default MemoButton;