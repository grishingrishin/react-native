import React, {Component} from 'react';
import {Animated} from 'react-native';

interface FLProps {
  children: React.ReactNode;
}

interface FLState {
  opacity: any;
}

class FadeInLoader extends Component<FLProps, FLState> {
  constructor(props: FLProps) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  public componentDidMount() {
    return Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  public render() {
    return (
      <Animated.View style={{opacity: this.state.opacity}}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeInLoader;
