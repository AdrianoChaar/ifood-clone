import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { CouponButton, Divisor, Logo, Content, CouponInfo, Title, Validity } from './styles';
import { red } from '../../utils/colors';

export default function Coupon() {
  return (
    <CouponButton>
      <Divisor>
        <Content>
          <Logo />
          <CouponInfo>
            <Title>Cupom de R$10</Title>
            <Validity>Válido até as 16:29</Validity>
          </CouponInfo>
        </Content>
        <MaterialIcons name="keyboard-arrow-right" color={red} size={20} />
      </Divisor>
    </CouponButton>
  );
}
