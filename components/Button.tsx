import React from 'react';
import { TouchableOpacity, Text, StyleSheet, } from 'react-native';

type ButtonProps = {
  btnWidth: number,
  btnHeight: number,
  title: string,
  btnColor: string,
  textColor: string,
  onPress: any,
  btnStyle: any,
}

const Button: React.FC<ButtonProps> = ({ btnWidth, btnHeight, title, btnColor, textColor, onPress, btnStyle }) => {
  return (
    <TouchableOpacity style={[
      styles.button,
      { backgroundColor: btnColor, width: btnWidth, height: btnHeight, },
      btnStyle
    ]}
    onPress={onPress}>
      <Text style={[
        styles.title,
        {color: textColor}
      ]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Button;