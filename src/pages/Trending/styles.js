import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #FFF;
`;

export const Banner = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: 120px;
`;

export const BackButton = styled.TouchableOpacity``;

export const ExportButton = styled.TouchableOpacity`
  margin-right: 10px;
`;