import React from 'react';
import { CustomFont } from './styles';

interface Props {
  size?: number;
  color?: string;
  type?: 'regular' | 'light' | 'semibold' | 'bold';
  children: string;
}

const Font: React.FC<Props> = ({
  children,
  size = 14,
  color,
  type = 'regular'
}) => {
  return (
    <CustomFont size={size} color={color} type={type}>
      {children}
    </CustomFont>
  );
};

export default Font;
