import React, { useState, useEffect } from 'react';

import {
  Container,
  Header,
  Title,
  CategoriesList,
  Item,
  ItemImage,
  ItemTitle,
} from './styles';

import api from '../../services/api';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');
      setCategories(response.data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <CategoriesList horizontal>
        {categories.map(item => (
          <Item key={item.id}>
            <ItemImage source={{ uri: item.categorie_url }} />
            <ItemTitle>{item.title}</ItemTitle>
          </Item>
        ))}
      </CategoriesList>
    </Container>
  );
}
