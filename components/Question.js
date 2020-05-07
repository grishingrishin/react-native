import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 18px;
  text-align: center;
`;

const Question = styled.Text`
  font-size: 12px;
  font-family: Roboto-Thin;
  color: #fff;
`;

const Route = styled.Text`
  text-decoration: underline;
  font-size: 12px;
  font-family: Roboto-Regular;
  color: #fff;
`;

export default ({ question, path, route }) => (
  <Container>
    <Question>{question} </Question>
    <Link to={path} component={TouchableOpacity}>
      <Route>{route}</Route>
    </Link>
  </Container>
);