import React, { useState, useEffect } from 'react';

import { withNavigation } from 'react-navigation';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Avatar,
  Info,
  Name,
  Message,
  ProfileButton,
} from './styles';

import api from '../../../services/api';

function Person() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function loadProfile() {
      const response = await api.get('profile');
      setProfile(response.data);
    }
    loadProfile();
  }, []);

  return (
    <Container>
      <ProfileButton>
        <Avatar source={{ uri: profile.avatar_url }} />
        <Info>
          <Name>Leonardo Barbosa</Name>
          <Message>Editar perfil</Message>
        </Info>
        <MaterialIcons name="keyboard-arrow-right" size={20} color="#999999" />
      </ProfileButton>
    </Container>
  );
}

export default withNavigation(Person);
