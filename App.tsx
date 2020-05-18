import React, {Component} from 'react';
import styled from 'styled-components/native';
import ErrorBoundary from './components/ErrorBoundary';
import Routes from './components/Routes';

const Container = styled.View`
  flex: 1;
`;

interface AppState {
  isLoaded: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: object) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  render() {
    return (
      <ErrorBoundary>
        <Container>
          <Routes />
        </Container>
      </ErrorBoundary>
    );
  }
}

export default App;
