import React from 'react';
import styled from 'styled-components/native';
import Hamburger from './Hamburger';
import Search from './Search';

const Container = styled.View`
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

const Actions = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Action = styled.View`
  margin-left: 24px;
`;

const Menu = styled.View`
  margin-right: 24px;
`;

const Messages = styled.Image`
  width: 48px;
  height: 48px;
`;

export default () => (
  <Container>
    <Menu>
      <Hamburger />
    </Menu>
    <Actions>
      <Action>
        <Search />
      </Action>
      <Action>
        <Messages
          source={require('../assets/user.png')}
        />
      </Action>
    </Actions>
  </Container>
);