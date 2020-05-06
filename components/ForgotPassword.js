import React, { Component } from 'react';
import styled from 'styled-components';
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

class ForgotPassword extends Component {
  constructor() {
    super();

    this.state = {
      email: ''
    }
  }

  changeTextHandler = value => {
    return this.setState({
      email: value,
    });
  }

  render() {
    return (
      <Container source={require('../assets/auth-bg.jpg')}>
        <Header>
          <Title>Reset your password!</Title>
        </Header>
        <FadeInLoader>
          <Box>
            <Group>
              <FloatingLabelInput
                value={this.state.email}
                secureTextEntry={true}
                placeholder='Enter your email address'
                changeHandle={this.changeTextHandler}
              />
            </Group>
          </Box>
        </FadeInLoader>
        <Actions>
          <Submit activeOpacity={0.9} onPress={this.loginHandler}>
            <SubmitText>Send</SubmitText>
          </Submit>
          <Question 
            path='/'
            route='Sign in!'
            question='Have an account?'
          />
        </Actions>
      </Container>
    );
  }
}

export default ForgotPassword;