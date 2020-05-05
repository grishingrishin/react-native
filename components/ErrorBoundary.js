import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    return logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Что-то пошло не так.</Text>;
    }

    return this.props.children; 
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary;