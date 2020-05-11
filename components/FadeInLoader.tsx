import React, { Component } from 'react';
import { Animated } from 'react-native';

interface FadeInLoaderProps {
  children: any
}

interface FadeInLoaderState {
  opacity: any
}

class FadeInLoader extends Component<FadeInLoaderProps, FadeInLoaderState> {
  constructor(props: FadeInLoaderProps) {
    super(props);

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

export default FadeInLoader;