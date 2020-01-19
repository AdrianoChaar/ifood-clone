import React from 'react';

import { Container } from './styles';

import Address from '../../components/Address';
import Input from '../../components/Input';
import Coupon from '../../components/Coupon';
import Suggestions from '../../components/Suggestions';
import Promotions from '../../components/Promotions';
import Offers from '../../components/Offers';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';

export default function Dashboard() {
  return (
    <Container>
      <Address />
      <Input placeholder="item ou loja" />
      <Coupon />
      <Suggestions />
      <Promotions />
      <Offers/>
      <Categories />
      <Restaurants />
    </Container>
  );
}
