import React from 'react';
import { View } from 'react-native';
import { Font } from '../';

import { ProgressBar, Row, TitleContainer } from './styles';

interface Props {
  title: string;
  numberOfSteps?: number;
  currentStep: number;
}

const Header: React.FC<Props> = ({ title, numberOfSteps = 3, currentStep }) => {
  return (
    <View>
      <Row>
        {[...Array(numberOfSteps)].map((_, i) => (
          <ProgressBar key={i} active={i === currentStep - 1} />
        ))}
      </Row>
      <TitleContainer>
        <View style={{ justifyContent: 'flex-end' }}>
          <Font size={18} type="bold">
            {title}
          </Font>
        </View>
        <View>
          <Font size={11} type="light">
            passo
          </Font>
          <Font size={18} type="bold">
            {`${currentStep}/${numberOfSteps}`}
          </Font>
        </View>
      </TitleContainer>
    </View>
  );
};

export default Header;
