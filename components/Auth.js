import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
  background-color: #693fa9;
`;

const Container = styled.ImageBackground`
  flex: 1;
  padding: 32px 0;
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
  font-family: Roboto-Thin;
  color: #fff;
`;

const WrapperInput = styled.View`
  padding: 0 16px;
`;

const TextInput = styled.TextInput`
  padding: 16px 14px;
  font-family: Roboto-Light;
  border-bottom-width: 1px;
  border-bottom-color: #d3c8e6;
`;

const Forgot = styled.TouchableOpacity`
  align-items: flex-end;
`;

const ForgotText = styled.Text`
  text-transform: uppercase;
  padding: 14px 0;
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
  font-family: Roboto-Regular;
  color: #fff;
`;

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        login: '',
        password: ''
      },
    };
  }

  changeLoginHandler = login => {
    return this.setState({
      data: {
        ...this.state.data,
        login
      }
    });
  }

  changePasswordHandler = password => {
    return this.setState({
      data: {
        ...this.state.data,
        password
      }
    });
  }

  goToForgotPassword = () => {}

  loginHandler = () => {}

  render() {
    return (
      <Wrapper>
        <Container source={require('../assets/auth-bg.jpg')}>
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