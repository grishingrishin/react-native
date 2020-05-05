import React, { Component } from 'react';
import styled from 'styled-components';
import * as Font from 'expo-font';
import { ActivityIndicator } from 'react-native';
import ErrorBoundary from './components/ErrorBoundary';
import Register from './components/Register';

const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
`;

class App extends Component {
  constructor() {
    super();

    this.state = { isLoaded: false }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    });

    return this.setState({ isLoaded: true });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <LoaderContainer>
          <ActivityIndicator size='large' color='#eb2054' />
        </LoaderContainer>
      )
    } else {
      return (
        <ErrorBoundary>
          <Container>
            <Register />
          </Container>
        </ErrorBoundary>
      )
    }
  }
}

export default App;
