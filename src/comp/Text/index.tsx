import React from 'react';
import {Text as RNText, TextStyle} from 'react-native';

type TextProps = {
  text?: string;
  style?: TextStyle;
};

const Text: React.FC<TextProps> = ({text = '', style = {}}) => {
  return <RNText style={[defaultStyle, style]}>{text}</RNText>;
};

const defaultStyle: TextStyle = {
  fontSize: 16,
  color: 'black',
};

export default Text;
