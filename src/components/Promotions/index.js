import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import { PromoList, Item, PromoImage } from './styles';

import api from '../../services/api';

function Promotions({ navigation }) {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    async function loadPromotions() {
      const response = await api.get('promotions');
      setPromotions(response.data);
    }
    loadPromotions();
  }, []);

  function handleNavigate(promo) {
    navigation.navigate('Trending', { promo });
  }

  return (
    <PromoList horizontal>
      {promotions.map(promo => (
        <Item key={promo.id} onPress={() => handleNavigate(promo)}>
          <PromoImage source={{ uri: promo.promo_url }} />
        </Item>
      ))}
    </PromoList>
  );
}

export default withNavigation(Promotions);
