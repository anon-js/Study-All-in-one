import React from 'react';
import { Image, TouchableOpacity, View} from 'react-native';

type CheckBoxProps = {
  n: number,
  size: number,
  value: any,
  isChecks: any[],
  setChecks: any,
}

const CheckBox: React.FC<CheckBoxProps> = ({ n, size, value, isChecks, setChecks }) => {
  return (
    
    <TouchableOpacity
      style={{
        backgroundColor: '#eee',
        width: size,
        height: size,
        borderRadius: 5,
      }}
      onPress={() => {
        setChecks([
          ...isChecks.slice(0, n),
          !value,
          ...isChecks.slice(n + 1),
        ]);
      }
    }>
      {
        !value ? <></> : <Image source={require('../assets/check.png')} style={{ width: 30, height: 30, backgroundColor: "#deebff", tintColor: "#297bff", }}/> }
    </TouchableOpacity>
  );
}

export default CheckBox;