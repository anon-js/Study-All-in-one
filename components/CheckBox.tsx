import React from 'react';
import { TouchableOpacity } from 'react-native';

type CheckBoxProps = {
  n: number,
  size: number,
  value: boolean,
  isChecks: any[],
  setChecks: any,
}

const CheckBox: React.FC<CheckBoxProps> = ({ n, size, value, isChecks, setChecks }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: value ? '#5BD06E' : '#eee',
        width: size,
        height: size,
        borderRadius: 5,
      }}
      onPress={() => {
        setChecks([
          ...isChecks.slice(0, n),
          !isChecks[n],
          ...isChecks.slice(n + 1),
        ]);
      } }
    >
    </TouchableOpacity>
  );
}

export default CheckBox;