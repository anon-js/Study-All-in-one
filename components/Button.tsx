import React from 'react';
import styled from 'styled-components/native';

type ButtonProps = {
  btnWidth: number,
  btnHeight: number,
  title: string,
  btnColor: string,
  textColor: string,
  onPress: any,
}

const Button: React.FC<ButtonProps> = ({ btnWidth, btnHeight, title, btnColor, textColor, onPress }) => {

  const ButtonView = styled.TouchableOpacity<{ bgColor: string, width: number, height: number }>`
    background: ${(p) => (p.bgColor)};
    width: ${(p) => (p.width + "px")};
    height: ${(p) => (p.height + "px")};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
  `

  const ButtonText = styled.Text<{ color: string }>`
    font-size: 15px;
    font-family: 'Pretendard-Medium';
    color: ${p => p.color};
  `

  return (
    <ButtonView bgColor={btnColor} width={btnWidth} height={btnHeight} onPress={onPress}>
      <ButtonText color={textColor}>{title}</ButtonText>
    </ButtonView>
  )
}

export default Button;