import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';
import FadeInLoader from './FadeInLoader';
import FloatingLabelInput from './FloatingLabelInput';
import Question from './Question';

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

const Forgot = styled.View`
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
              <Forgot>
                <Link to="/forgot" component={TouchableOpacity}><ForgotText>Forgot Password?</ForgotText></Link>
              </Forgot>
            </Group>
          </Box>
        </FadeInLoader>
        <Actions>
          <Submit activeOpacity={0.9} onPress={this.loginHandler}>
            <SubmitText>Sing in</SubmitText>
          </Submit>
          <Question 
            path='/registry'
            route='Register now!'
            question='Still don’t have an account?'
          />
        </Actions>
      </Container>
    );
  }
}

export default Auth;