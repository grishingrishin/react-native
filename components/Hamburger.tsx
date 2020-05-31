import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Icon = styled.Image`
  width: 42px;
  height: 24px;
`;

export default () => (
  <TouchableOpacity>
    <Icon source={require('../assets/hamburger.png')} />
  </TouchableOpacity>
);