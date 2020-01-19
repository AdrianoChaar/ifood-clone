import React, { useState, useEffect } from 'react';

import { PromoList, Item, PromoImage } from './styles';

import api from '../../services/api';

export default function Promotions() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    async function loadPromotions() {
      const response = await api.get('promotions');
      setPromotions(response.data);
    }
    loadPromotions();
  }, []);

  return (
    <PromoList horizontal={true}>
      {promotions.map(promo => (
        <Item key={promo.id}>
          <PromoImage source={{uri: promo.promo_url}} />
        </Item>
      ))}
    </PromoList>
  );
}
