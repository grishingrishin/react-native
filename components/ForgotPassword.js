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
          <Question>Have an account? <Link to="/" component={QuestionRoute}>Sign in!</Link></Question>
        </Actions>
      </Container>
    );
  }
}

export default ForgotPassword;