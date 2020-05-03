import React, { Component } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  position: relative;
`;

const Placeholder = styled.Text`
  font-family: Roboto-Light;
  color: #fff;
`;

const TextInput = styled.TextInput`
  padding: 18px 14px 18px 14px;
  font-size: 22px;
  font-family: Roboto-Light;
  color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: rgba(211, 200, 230, 0.5);
`;

class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedIsFocused: new Animated.Value(this.hasInputValue()),
    };
  }

  handleFocus = () => {
    return Animated.timing(this.state.animatedIsFocused, {
      toValue: 1,
      duration: 200
    }).start();
  }

  handleBlur = () => {
    return Animated.timing(this.state.animatedIsFocused, {
      toValue: this.hasInputValue(),
      duration: 200
    }).start();
  }

  hasInputValue = () => this.props.value.length > 0 && this.props.value !== 0 ? 1 : 0;

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
          secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
          onChangeText={text => this.props.changeHandle(text)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Container>
    )
  }
}

export default FloatingLabelInput;