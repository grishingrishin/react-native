import React from 'react';
import styled from 'styled-components/native';
import Actions from './Actions';

const Container = styled.View`
  flex: 1;
  background-color: pink;
`;

export default () => (
  <Container>
    <Actions />
  </Container>
);
