import React from 'react';

import { Container, Image, BackButton } from './styles';

import { MaterialIcons } from '@expo/vector-icons';

export default function Trending({ navigation }) {
  return (
    <Container>
    </Container>
  );
}

Trending.navigationOptions = ({navigation}) => ({
  headerBackground: () => (
    <Container>
      <Image source={{uri: navigation.getParam('promo').menu_url}} />
    </Container>
  ),
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" color="#FFF" size={35} />
    </BackButton>
  ),
  headerTitleStyle: {
    display: 'none',
  },
  // headerBackTitleVisible: false,
  headerStyle: {
    height: 150,
  }
})
