import React from 'react';
import { TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import SearchInput from './SearchInput';
// import SideMenu from './SideMenu';

const Container = styled.View`
  flex: 1;
  background-color: pink;
`;

const Actions = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  padding: 28px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Action = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.Image`
  width: 42px;
  height: 24px;
  margin-right: 24px;
`;

const Search = styled.View`
  margin-right: 24px;
`;

const Messages = styled.Image`
  width: 48px;
  height: 48px;
`;

const Account = () => {
  return (
    <Container>
      <Actions>
        <Action>
          <TouchableHighlight>
            <Menu
              source={require('../assets/hamburger.png')}
            />
          </TouchableHighlight>
        </Action>
        <Action>
          <Search>
            <SearchInput />
          </Search>
          <TouchableHighlight>
            <Messages
              source={require('../assets/user.png')}
            />
          </TouchableHighlight>
        </Action>
      </Actions>
      {/* <SideMenu /> */}
    </Container>
  )
}

export default Account;