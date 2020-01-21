import React from 'react';

import { withNavigation } from 'react-navigation';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Button } from './styles';

function HeaderRight({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Wallet')}>
        <MaterialCommunityIcons name="qrcode-scan" color="#F00" size={25} />
      </Button>
    </Container>
  );
}

export default withNavigation(HeaderRight);
