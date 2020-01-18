import React from 'react';

import { Container } from './styles';

import Address from '../../components/Address';
import Input from '../../components/Input';
import Coupon from '../../components/Coupon';

export default function Dashboard() {
  return (
    <Container>
      <Address />
      <Input placeholder="item ou loja" />
      <Coupon />
    </Container>
  );
}
