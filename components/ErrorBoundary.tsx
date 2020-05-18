import React, {Component} from 'react';
import styled from 'styled-components/native';

const ErrorContainer = styled.View`
  padding: 48px 14px;
`;

const ErrorText = styled.Text`
  color: red;
`;

interface ERProps {
  children: React.ReactNode;
}

interface ERState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ERProps, ERState> {
  constructor(props: ERProps) {
    super(props);

    this.state = {hasError: false};
  }

  public static getDerivedStateFromError() {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorText>Oops, Error!</ErrorText>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
