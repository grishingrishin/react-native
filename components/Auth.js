import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
  background-color: #693fa9;
`;

const Container = styled.ImageBackground`
  flex: 1;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: space-between;
  resize-mode: cover;
`;

const Header = styled.View`
  position: relative;
  top: 15%;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 42px;
  color: #fff;
`;

const WrapperInput = styled.View`
  padding-right: 16px;
  padding-left: 16px;
`;

const TextInput = styled.TextInput`
  padding-top: 16px;
  padding-right: 14px;
  padding-bottom: 16px;
  padding-left: 14px;
  border-bottom-width: 1px;
  border-bottom-color: #d3c8e6;
`;

const Forgot = styled.TouchableOpacity`
  align-items: flex-end;
`;

const ForgotText = styled.Text`
  text-transform: uppercase;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 12px;
  color: #fff;
`;

const Action = styled.View``;

const Submit = styled.TouchableOpacity`
  align-items: center;
  height: 54px;
  background-color: #eb2054;
`;

const SubmitText = styled.Text`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 54px;
  color: #fff;
`;

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        login: '',
        password: ''
      }
    };
  }

  changeLoginHandler = text => {
    return this.setState({
      data: {
        ...this.state.data,
        login: text
      }
    });
  }

  changePasswordHandler = text => {
    return this.setState({
      data: {
        ...this.state.data,
        password: text
      }
    });
  }

  goToForgotPassword = () => {}

  loginHandler = () => {}

  render() {
    return (
      <Wrapper>
        <Container source={require('../assets/images/auth-bg.jpg')}>
          <Header>
            <Title accessibilityRole='header'>Welcome!</Title>
          </Header>
          <WrapperInput>
            <TextInput
              onChangeText={text => this.changeLoginHandler(text)}
              value={this.state.data.login}
              placeholder='Login'
            />
            <TextInput 
              onChangeText={text => this.changePasswordHandler(text)}
              value={this.state.data.password}
              secureTextEntry={true}
              placeholder='Password'
            />
            <Forgot onPress={this.goToForgotPassword}>
              <ForgotText>Forgot Password?</ForgotText>
            </Forgot>
          </WrapperInput>
          <Action>
            <Submit activeOpacity={0.9} onPress={this.loginHandler}>
              <SubmitText>Login</SubmitText>
            </Submit>
          </Action>
        </Container>
      </Wrapper>
    );
  }
}

export default Auth;