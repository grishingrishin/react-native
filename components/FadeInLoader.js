import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

class FadeInLoader extends Component {
  constructor() {
    super();

    this.state = {
      opacity: new Animated.Value(0),
    }
  }

  componentDidMount() {
    return Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.View style={{ opacity: this.state.opacity }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

FadeInLoader.propTypes = {
  children: PropTypes.node.isRequired
}

export default FadeInLoader;