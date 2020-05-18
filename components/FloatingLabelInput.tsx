import React, {Component} from 'react';
import {Animated} from 'react-native';
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

interface FLInputProps {
  value: string;
  placeholder: string;
  secureTextEntry: boolean;
  changeHandle(value: string): void;
}

interface FLInputState {
  animatedIsFocused: any;
}

class FloatingLabelInput extends Component<FLInputProps, FLInputState> {
  static defaultProps = {
    value: '',
    secureTextEntry: false,
  };

  constructor(props: FLInputProps) {
    super(props);

    this.state = {
      animatedIsFocused: new Animated.Value(this.hasInputValue()),
    };
  }

  private handleChange = (value: string): void => {
    this.props.changeHandle(value);
  };

  private handleFocus = (): void => {
    Animated.timing(this.state.animatedIsFocused, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  private handleBlur = (): void => {
    Animated.timing(this.state.animatedIsFocused, {
      toValue: this.hasInputValue(),
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  private hasInputValue = (): number => (this.props.value.length !== 0 ? 1 : 0);

  public render() {
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
          }}>
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
    );
  }
}

export default FloatingLabelInput;
