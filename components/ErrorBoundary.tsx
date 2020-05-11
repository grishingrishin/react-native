import React, { Component } from 'react';
import styled from 'styled-components/native';

const ErrorContainer = styled.View`
  padding: 48px 14px;
`;

const ErrorText = styled.Text`
  color: red;
`;

interface ErrorBoundaryProps {
  children: any,
}

interface ErrorBoundaryState {
  error: null | object,
  hasError: boolean,
  errorInfo: any,
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: null,
      hasError: false,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: object) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorText>{this.state.error && this.state.error.toString()}</ErrorText>
          <ErrorText>{this.state.errorInfo && this.state.errorInfo.componentStack}</ErrorText>
        </ErrorContainer>
      )
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;