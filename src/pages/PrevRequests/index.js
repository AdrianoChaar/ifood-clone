import React from 'react';

import { Container } from './styles';

import Purchases from '../../components/Purchases';

export default function PrevRequests() {
  return (
    <Container>
      <Purchases />
    </Container>
  );
}

PrevRequests.navigationOptions = {
  title: 'ANTERIORES',
};
