import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';

import { Container, Title, LocalContainer, Name, Address } from './styles';

const Dashboard: React.FC = () => {
  const navigator = useNavigation();

  const goToMenu = useCallback(() => {
    navigator.navigate('menu', {
      id: 2,
    });
  }, [navigator]);

  return (
    <Container>
      <Title>Lista de Restaurantes</Title>
      <LocalContainer onPress={goToMenu}>
        <View>
          <Name>Restaurante do Crebim</Name>
          <Address>Rua das rosas, 730</Address>
        </View>
        <View>
          <Icon name="chevrons-right" color="#7c40ff" size={32} />
        </View>
      </LocalContainer>
    </Container>
  );
};

export default Dashboard;
