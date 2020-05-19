import React from 'react';
import { TouchableHighlight, FlatList } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.3);
`;

const Menu = styled.View`
  width: 80%;
  height: 100%;
  background-color: #fff;
`;

const Header = styled.View`
  padding: 28px 24px;
  border-bottom-width: .5px;
  border-bottom-color: rgba(0,0,0,.3);
`;

const Actions = styled.View`
  margin-bottom: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Closed = styled.Image`
  width: 34px;
  height: 20px;
`;

const Settings = styled.Image`
  width: 24px;
  height: 24px;
`;

const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 98px;
  height: 98px;
  border-radius: 120px;
`;

const UserName = styled.Text`
  flex: 1;
  padding: 0 12px;
  font-size: 28px;
  font-family: Roboto-Light;
`;

const List = styled.View`
  padding: 14px 0;
`;

const MenuItem = styled.View`
  padding: 14px 24px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const ItemIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 14px;
`;

const ItemText = styled.Text`
  font-size: 18px;
  font-family: Roboto-Light;
`;

const MENU_ITEMS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    icon: '../assets/profile.png',
    title: 'Profile',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    icon: '../assets/toDoList.png',
    title: 'To Do List',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    icon: '../assets/groups.png',
    title: 'Groups',
  },
  {
    id: '7ac68afc-c685-48d3-a4f9-fbd91aa97f65',
    icon: '../assets/news.png',
    title: 'News',
  },
];

const Item = ({ title }: any) => {
  return (
    <TouchableHighlight>
      <MenuItem>
        <ItemIcon
          source={require('../assets/profile.png')}
        />
        <ItemText>{title}</ItemText>
      </MenuItem>
    </TouchableHighlight>
  );
}

const SideMenu = () => {
  const renderItem = ({ item }: any) => (
    <Item
      id={item.id}
      title={item.title}
    />
  );

  return (
    <Wrapper>
      <Menu>
        <Header>
          <Actions>
            <TouchableHighlight>
              <Closed
                source={require('../assets/arrow.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <Settings
                source={require('../assets/settings.png')}
              />
            </TouchableHighlight>
          </Actions>
          <User>
            <Avatar
              source={require('../assets/sidemenu_avatar.png')}
            />
            <UserName>Sarah Townshend</UserName>
          </User>
        </Header>
        <List>
          <FlatList
            data={MENU_ITEMS}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </List>
      </Menu>
    </Wrapper>
  )
}

export default SideMenu;