import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Name,
  ListItemsContainer,
  Item,
  NameItem,
  ContainerItem,
  Details,
  Title,
  Description,
  Image,
  Price,
  SectionName,
} from './styles';
import { api } from '../../services/api';

interface RouteProps {
  route: RouteProp<{ params: { id: string } }, 'params'>;
}

interface ItemMenu {
  id: number;
  menu_section_id: number;
  item_name: string;
  price: string;
  description: string;
  observation: string | null;
  sold_off: boolean;
  photo: {
    id: number;
    real_name: string;
    path: string;
    menu_item_id: number;
  };
}

interface SectionMenu {
  id: number;
  user_id: number;
  section_name: string;
  is_active: string;
  items: ItemMenu[];
}

interface ListItemsClient {
  success: boolean;
  message: string;
  items: SectionMenu[];
}

const Menu: React.FC<RouteProps> = ({ route }) => {
  const navigator = useNavigation();
  const [list, setList] = useState<SectionMenu[]>([]);

  useEffect(() => {
    async function getItems(id: string): Promise<void> {
      try {
        const response = await api.get<ListItemsClient>(`/user/items/${id}`);

        setList(response.data.items);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }

    getItems(route.params.id);
  }, [route]);

  return (
    <>
      <Header>
        <TouchableOpacity onPress={() => navigator.goBack()}>
          <Icon name="arrow-left" color="#FFFFFF" size={24} />
        </TouchableOpacity>
        <Name>Restaurante do Crebim</Name>
      </Header>
      <Container>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ListItemsContainer>
            {list.map(data => (
              <Item key={data.id}>
                <NameItem>{data.section_name}</NameItem>
              </Item>
            ))}
          </ListItemsContainer>
        </ScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ height: '100%' }}
        >
          {list.map(data => (
            <React.Fragment key={data.id}>
              <SectionName>{data.section_name}</SectionName>
              {data.items.map(item => (
                <ContainerItem key={item.id}>
                  <Details>
                    <Title> {item.item_name}</Title>
                    <Description>{item.description}</Description>
                    <Price>R$ {item.price}</Price>
                  </Details>
                  <Image
                    source={{
                      uri: item.photo.path,
                    }}
                  />
                </ContainerItem>
              ))}
            </React.Fragment>
          ))}
        </ScrollView>
      </Container>
    </>
  );
};

export default Menu;
