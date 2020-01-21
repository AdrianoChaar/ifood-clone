import React from 'react';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Banner, BackButton, ExportButton } from './styles';

import Restaurants from '../../components/Restaurants';

export default function Trending({ navigation }) {
  return (
    <Container>
      {/* <Banner source={{uri: navigation.getParam('promo').menu_url}} /> */}
      <Restaurants title="" />
    </Container>
  );
}

Trending.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" color="#F00000" size={35} />
    </BackButton>
  ),
  title: `${navigation.getParam('promo').categorie}`,
  headerRight: () => (
    <ExportButton>
      <MaterialCommunityIcons name="export-variant" color="#F00000" size={25} />
    </ExportButton>
  ),
});
