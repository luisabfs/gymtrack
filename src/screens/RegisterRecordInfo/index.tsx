import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, Input } from '../../components';
import { List, Checkbox, Button } from 'react-native-paper';
import {
  Container,
  ProgressBar,
  CustomAccordeon,
  CustomAccordionItem
} from './styles';

const RegisterRecordInfo: React.FC = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  const weekDays = [
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
    'domingo'
  ];

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
              )}
              expanded={expanded}
              onPress={() => setExpanded(!expanded)}>
              <>
                {weekDays.map((day) => (
                  <CustomAccordionItem key={day}>
                    <Checkbox.Item
                      label={day}
                      position="leading"
                      uncheckedColor={theme.colors.accent}
                      style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                        width: '90%'
                      }}
                      labelStyle={{
                        color: theme.colors.fonts.primary,
                        fontFamily: theme.fonts.regular,
                        fontSize: 14,
                        textAlign: 'left',
                        width: '100%'
                      }}
                      mode="android"
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => setChecked(!checked)}
                      color={theme.colors.accent}
                    />
                  </CustomAccordionItem>
                ))}
              </>
            </CustomAccordeon>
          </View>
        </View>

        <View>
          <Button
            style={{ borderRadius: 4, marginBottom: 15 }}
            mode="contained"
            buttonColor={theme.colors.accent}>
            <Font type="semibold">próximo →</Font>
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default RegisterRecordInfo;
