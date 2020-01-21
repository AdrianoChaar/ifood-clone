import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container, TextInput } from './styles';

import { red } from '../../utils/colors';

export default function Input({ placeholder, header }) {
  return (
    <Container header={header}>
      <MaterialIcons name="search" size={25} color={red} />
      <TextInput placeholder={placeholder} />
    </Container>
  );
}
