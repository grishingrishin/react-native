import React, { Component } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  position: relative;
`;

const Placeholder = styled.Text`
  font-family: Roboto-Light;
  color: #fff;
`;

const TextInput = styled.TextInput`
  padding: 18px 14px 18px 14px;
  font-size: 16px;
  font-family: Roboto-Light;
  color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: rgba(211, 200, 230, 0.5);
`;

interface FloatingLabelInputProps {
  value: string,
  placeholder: string,
  secureTextEntry: boolean,
  changeHandle(text: string): any
}

interface FloatingLabelInputState {
  animatedIsFocused: any
}

class FloatingLabelInput extends Component<FloatingLabelInputProps, FloatingLabelInputState> {
  static defaultProps = {
    value: '',
    secureTextEntry: false,
  } 

  constructor(props: FloatingLabelInputProps) {
    super(props);

    this.state = {
      animatedIsFocused: new Animated.Value(this.hasInputValue()),
    };
  }

  handleChange = (value: string) => this.props.changeHandle(value);

  handleFocus = () => {
    return Animated.timing(this.state.animatedIsFocused, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  handleBlur = () => {
    return Animated.timing(this.state.animatedIsFocused, {
      toValue: this.hasInputValue(),
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  hasInputValue = (): number => this.props.value.length !== 0 ? 1 : 0;

  render() {
    return (
      <Container>
        <Animated.Text
          style={{
            position: 'absolute',
            left: 14,
            top: this.state.animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [18, 0],
            }),
            fontSize: this.state.animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [22, 12],
            }),
            opacity: this.state.animatedIsFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.5],
            }),
          }}
        >
          <Placeholder>{this.props.placeholder}</Placeholder>
        </Animated.Text>
        <TextInput
          value={this.props.value}
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Container>
    )
  }
}

export default FloatingLabelInput;