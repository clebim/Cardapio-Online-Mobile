import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 16px;
`;

export const Title = styled.Text`
  margin-top: ${getStatusBarHeight() + 12}px;
  color: #ffffff;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
`;

export const LocalContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 16px;
  background-color: #292e3c;
  border-radius: 12px;
`;

export const Name = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #ffffff;
  font-size: 18px;
`;
export const Address = styled.Text`
  margin-top: 4px;
  color: #ffffff;
  font-family: 'RobotoSlab-Regular';
`;
