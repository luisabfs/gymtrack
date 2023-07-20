import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Font, Accordion, Input } from '../../components';
import { Button, Divider, Chip } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { RegisterWorkoutRecordRouteProp } from '../../types/navigation.d';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, ProgressBar } from './styles';

const RegisterWorkouts: React.FC = () => {
  const theme = useTheme();
  const route = useRoute<RegisterWorkoutRecordRouteProp>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#333' }}>
      <Container>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%'
            }}>
            <ProgressBar />
            <ProgressBar active />
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
                treinos da ficha{` ${route.params?.recordName}` || ''}:
              </Font>
            </View>
            <View>
              <Font size={11} type="light">
                passo
              </Font>
              <Font size={18} type="bold">
                2/3
              </Font>
            </View>
          </View>
          {/* <Input label="nome" placeholder='"01/2023"' />
          <Input
            label="objetivo"
            placeholder='"Hipertrofia"'
            icon="bullseye-arrow"
          />

          <Input label="período" icon="calendar" /> */}

          <Accordion rowWeekDays>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center'
                // marginBottom: 5
              }}>
              <Font type="bold">grupo muscular</Font>
              <Divider
                style={{
                  flex: 1,
                  height: 2,
                  marginLeft: 10,
                  backgroundColor: theme.colors.secondary
                }}
              />
            </View>
            <View
              style={{
                // width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5
                // justifyContent: 'space-between'
              }}>
              <View
                style={{
                  flex: 1
                }}>
                <Input />
              </View>
              <Chip
                icon={() => (
                  <Icon size={18} name={'plus'} color={theme.colors.white} />
                )}
                mode="outlined"
                textStyle={{ color: theme.colors.fonts.primary }}
                style={{
                  backgroundColor: 'transparent',
                  borderRadius: 20,
                  marginLeft: 5,
                  height: 45,
                  marginTop: 5,
                  borderColor: theme.colors.accent
                }}>
                <Font>ADD</Font>
              </Chip>
            </View>
          </Accordion>
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

export default RegisterWorkouts;
