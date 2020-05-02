import React, { Component } from 'react';
import styled from 'styled-components';
import * as Font from 'expo-font';
import Register from './components/Register';

const Container = styled.View`
  flex: 1;
  justifyContent: center;
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
        <Container></Container>
      )
    } else {
      return (
        <Container>
          <Register />
        </Container>
      )
    }
  }
}

export default App;
