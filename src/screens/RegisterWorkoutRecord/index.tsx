import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, Input } from '../../components';
import { List, Checkbox, Button } from 'react-native-paper';
import { Container, ProgressBar, CustomAccordeon } from './styles';

const RegisterWorkoutRecord: React.FC = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#333' }}>
      <Container>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%'
            }}>
            <ProgressBar active />
            <ProgressBar />
            <ProgressBar />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: 10
            }}>
            <View style={{ justifyContent: 'flex-end' }}>
              <Font size={18} type="bold">
                ficha de treino atual:
              </Font>
            </View>
            <View>
              <Font size={11} type="light">
                passo
              </Font>
              <Font size={18} type="bold">
                1/3
              </Font>
            </View>
          </View>
          <Input label="nome" placeholder='"01/2023"' />
          <Input
            label="objetivo"
            placeholder='"Hipertrofia"'
            icon="bullseye-arrow"
          />
          {/* // TODO: add date picker */}
          <Input label="período" icon="calendar" />

          <View style={{ marginTop: 5, marginBottom: 5 }}>
            <Font>dias de treino</Font>
            <CustomAccordeon
              title='"seg, ter, qua, quin"'
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="dumbbell"
                  color={theme.colors.secondary}
                />
              )}>
              <>
                {/* // TODO: make this a component (CustomAccordionItem) */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}>
                  {/* // TODO: build custom checkbox */}
                  <Checkbox status="checked" color={theme.colors.accent} />
                  <Font>segunda</Font>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                  <Checkbox status="checked" color={theme.colors.accent} />
                  <Font>terça</Font>
                </View>
              </>
            </CustomAccordeon>
          </View>
        </View>

        <View>
          <Button
            style={{ borderRadius: 4, marginBottom: 15 }}
            mode="contained"
            buttonColor={theme.colors.accent}>
            próximo →
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default RegisterWorkoutRecord;
