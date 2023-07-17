import React from 'react';
import { CustomFont } from './styles';

interface Props {
  size?: number;
  color?: string;
  type?: 'bold' | 'normal' | 'thin';
  children: string;
}

const Font: React.FC<Props> = ({ children, size = 14, color, type }) => {
  return (
    <CustomFont size={size} color={color} type={type}>
      {children}
    </CustomFont>
  );
};

export default Font;
