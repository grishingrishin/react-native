import React, { Component } from 'react';
import styled from 'styled-components';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { ActivityIndicator } from 'react-native';
import ErrorBoundary from './components/ErrorBoundary';
import Routes from './components/Routes';

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

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }

      return status;
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
    });

    return this.setState({ isLoaded: true }, () => this.getPermissionAsync());
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
            <Routes />
          </Container>
        </ErrorBoundary>
      )
    }
  }
}

export default App;
