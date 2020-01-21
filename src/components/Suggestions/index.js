import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { SuggestionList, Item, SuggestionImage, Title } from './styles';

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function loadSuggestions() {
      const response = await api.get('suggestions');
      setSuggestions(response.data);
    }
    loadSuggestions();
  }, []);

  return (
    <SuggestionList horizontal>
      {suggestions.map(suggestion => (
        <Item key={suggestion.id}>
          <SuggestionImage source={{ uri: suggestion.sugg_url }} />
          <Title>{suggestion.title}</Title>
        </Item>
      ))}
    </SuggestionList>
  );
}
