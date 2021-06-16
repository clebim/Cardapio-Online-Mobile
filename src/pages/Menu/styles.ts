import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 16px;
  padding-bottom: 100px;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 24}px;
  padding-left: 16px;
  padding-bottom: 16px;
  background-color: #7c40ff;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #ffffff;
  font-size: 18px;
  margin-left: 16px;
`;

export const ListItemsContainer = styled.View`
  flex-direction: row;
`;

export const Item = styled.View`
  padding: 8px;
`;

export const NameItem = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #ffffff;
  font-size: 18px;
`;

export const SectionName = styled.Text`
  font-size: 22px;
  color: #ffffff;
  font-family: 'RobotoSlab-Medium';
  margin: 8px 0;
`;

export const ContainerItem = styled.View`
  margin-top: 8px;
  width: 100%;
  flex-direction: row;
  background-color: #292e3c;
  padding: 8px;
  border-radius: 16px;
`;

export const Details = styled.View`
  flex: 1;
  margin-right: 8px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #ffffff;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin-top: 8px;
  font-size: 14px;
  color: #ffffff;
  font-family: 'RobotoSlab-Regular';
`;

export const Price = styled.Text`
  margin-top: 16px;
  color: #0b920b;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;

export const Image = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 16px;
`;
