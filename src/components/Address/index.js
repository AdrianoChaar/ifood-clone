import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container, Location, AddressButton } from './styles';

import { red } from '../../utils/colors';

export default function Address() {
  return (
    <Container>
      <AddressButton>
        <Location>React Native, 2020</Location>
        <MaterialIcons name="keyboard-arrow-down" size={20} color={red} />
      </AddressButton>
    </Container>
  );
}
