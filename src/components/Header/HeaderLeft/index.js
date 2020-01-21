import React from 'react';

import { withNavigation } from 'react-navigation';

import { Container, Button, Title } from './styles';

function HeaderLeft({ navigation }) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Dashboard')}>
        <Title>Entrega</Title>
      </Button>
      <Button onPress={() => {}}>
        <Title disabled>Retirada</Title>
      </Button>
    </Container>
  );
}

export default withNavigation(HeaderLeft);
