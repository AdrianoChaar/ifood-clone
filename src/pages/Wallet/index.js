import React from 'react';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  BackButton,
  Balance,
  Title,
  Value,
  QrCode,
  Options,
  Option,
  Message,
  Panel,
  Money,
} from './styles';

export default function Wallet() {
  return (
    <Container>
      <Panel>
        <Balance>
          <Title>Seu saldo na carteira</Title>
          <Money>
            <Value>R$ 52,70</Value>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#F00" />
          </Money>
        </Balance>
        <QrCode>
          <MaterialCommunityIcons name="qrcode-scan" color="#F00" size={28} />
          <Title>QR code</Title>
        </QrCode>
      </Panel>

      <Options horizontal>
        <Option onPress={() => {}}>
          <MaterialIcons name="credit-card" size={35} color="#999" />
          <Message>Formas de pagamento</Message>
        </Option>
        <Option onPress={() => {}}>
          <MaterialIcons name="card-giftcard" size={35} color="#999" />
          <Message>Resgatar IFood Card</Message>
        </Option>
        <Option onPress={() => {}}>
          <MaterialIcons name="store" size={35} color="#999" />
          <Message>Por onde usar</Message>
        </Option>
        <Option onPress={() => {}}>
          <MaterialCommunityIcons name="help-circle" size={35} color="#999" />
          <Message>Preciso de Ajuda</Message>
        </Option>
      </Options>
    </Container>
  );
}

Wallet.navigationOptions = ({ navigation }) => ({
  headerBackTitleVisible: false,
  title: 'CARTEIRA',
  headerTitleAlign: 'center',
  headerStyle: {
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerLeft: () => (
    <BackButton onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" color="#f00" size={35} />
    </BackButton>
  ),
});
