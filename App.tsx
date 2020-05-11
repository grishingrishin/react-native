import React, { Component } from 'react';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { ActivityIndicator, Alert } from 'react-native';
import ErrorBoundary from './components/ErrorBoundary';
import Routes from './components/Routes';

const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
`;

interface AppState {
  isLoaded: boolean
}

class App extends Component<{}, AppState> {
  constructor(props: object) {
    super(props);

    this.state = {
      isLoaded: false
    }
  }

  getPermissionAsync = async () => {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== 'granted') {
        Alert.alert('Sorry!', 'We need camera roll permissions to make this work!');
      }

      return status;
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
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