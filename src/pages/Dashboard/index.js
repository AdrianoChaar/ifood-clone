import React from 'react';

import { withNavigationFocus } from 'react-navigation';
import { Container } from './styles';

import Address from '../../components/Address';
import Input from '../../components/Input';
import Coupon from '../../components/Coupon';
import Suggestions from '../../components/Suggestions';
import Promotions from '../../components/Promotions';
import Offers from '../../components/Offers';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';

import HeaderLeft from '../../components/Header/HeaderLeft';
import HeaderRight from '../../components/Header/HeaderRight';

function Dashboard() {
  return (
    <Container>
      <Address />
      <Input placeholder="item ou loja" />
      <Coupon />
      <Suggestions />
      <Promotions />
      <Offers />
      <Categories />
      <Restaurants title="Restaurantes" display />
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerTitleStyle: {
    display: 'none',
  },
  headerStyle: {
    height: 70,
  },
  headerRight: () => <HeaderRight />,
  headerLeft: () => <HeaderLeft />,
};

export default withNavigationFocus(Dashboard);
