import React from 'react';

import { Container, TextInput } from './styles';

import { MaterialIcons } from '@expo/vector-icons';

import { red } from '../../utils/colors';

export default function Input({ placeholder }) {
  return (
    <Container>
        <MaterialIcons name="search" size={25} color={red} />
          <TextInput placeholder={placeholder}>
      </TextInput>
    </Container>
  );
}
