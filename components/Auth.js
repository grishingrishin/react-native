import React, { Component } from 'react';
import { Link } from 'react-router-native';
import styled from 'styled-components';
import FadeInLoader from './FadeInLoader';
import FloatingLabelInput from './FloatingLabelInput';

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

const Box = styled.View`
  padding: 0 16px;
`;

const Group = styled.View`
  margin-bottom: 14px;
`;

const Forgot = styled.TouchableOpacity`
  align-items: flex-end;
`;

const ForgotText = styled.Text`
  text-transform: uppercase;
  padding: 14px 0;
  font-size: 10px;
  color: #fff;
`;

const Actions = styled.View``;

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

const Question = styled.Text`
  margin-top: 18px;
  text-align: center;
  font-size: 12px;
  font-family: Roboto-Thin;
  color: #fff;
`;

const QuestionRoute = styled.Text`
  text-decoration: underline;
  font-family: Roboto-Regular;
`;
class Auth extends Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: ''
    }
  }

  changeTextHandler = props => value => {
    return this.setState({
      [props]: value,
    });
  }

  render() {
    return (
      <Container source={require('../assets/auth-bg.jpg')}>
        <Header>
          <Title>Welcome!</Title>
        </Header>
        <FadeInLoader>
          <Box>
            <Group>
              <FloatingLabelInput
                value={this.state.login}
                placeholder='Login'
                changeHandle={this.changeTextHandler('login')}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.password}
                placeholder='Password'
                secureTextEntry={true}
                changeHandle={this.changeTextHandler('password')}
              />
              <Forgot onPress={this.goToForgotPassword}>
                <Link to="/forgot" component={ForgotText}>Forgot Password?</Link>
              </Forgot>
            </Group>
          </Box>
        </FadeInLoader>
        <Actions>
          <Submit activeOpacity={0.9} onPress={this.loginHandler}>
            <SubmitText>Sing in</SubmitText>
          </Submit>
          <Question>Still don’t have an account? <Link to="/registry" component={QuestionRoute}>Register now!</Link></Question>
        </Actions>
      </Container>
    );
  }
}

export default Auth;