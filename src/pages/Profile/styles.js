import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: #FFF;
  /* padding: 0 20px; */
`;

export const OptionsList = styled.ScrollView``;

export const Option = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
  padding: 10px 20px;
  border: ${StyleSheet.hairlineWidth}px #eee;
`;

export const Info = styled.ScrollView`
  margin-left: 20px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 18px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AdditionalMenu = styled.View`
  margin-top: 80px;
`;

export const AdditionalOption = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  padding: 10px 20px;
  border: 1px #eee;
`;

export const OptionName = styled.Text`
  margin-left: 25px;
  color: #ccc;
  font-size: 18px;
`;
