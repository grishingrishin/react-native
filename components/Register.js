import React, { Component } from 'react';
import styled from 'styled-components';
import FloatingLabelInput from './FloatingLabelInput';

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
  padding: 32px 0;
`;

const Title = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-size: 32px;
  font-family: Roboto-Thin;
  color: #fff;
`;

const Step = styled.Text`
  font-family: Roboto-Regular;
`;

const Count = styled.Text``;

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

class Register extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        firstName: '',
        secondName: '',
        gender: '',
        date: '' 
      },
    };
  }

  changeFirstNameHandler = firstName => {
    return this.setState({
      data: {
        ...this.state.data,
        firstName,
      }
    });
  }

  changeSecondNameHandler = secondName => {
    return this.setState({
      data: {
        ...this.state.data,
        secondName,
      }
    });
  }

  changeGenderHandler = gender => {
    return this.setState({
      data: {
        ...this.state.data,
        gender,
      }
    });
  }

  changeDateHandler = date => {
    return this.setState({
      data: {
        ...this.state.data,
        date,
      }
    });
  }

  toNextStep = () => {}

  render() {
    return (
      <Wrapper>
        <Container source={require('../assets/auth-bg.jpg')}>
          <Header>
            <Title>
              Register <Step>Step<Count> 2</Count></Step>
            </Title>
          </Header>
          <Box>
            <Group>
              <FloatingLabelInput
                value={this.state.data.firstName}
                placeholder='First Name'
                changeHandle={this.changeFirstNameHandler}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.data.secondName}
                placeholder='Second Name'
                changeHandle={this.changeSecondNameHandler}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.data.gender}
                placeholder='Gender'
                changeHandle={this.changeGenderHandler}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.data.date}
                placeholder='Date of Birth'
                changeHandle={this.changeDateHandler}
              />
            </Group>
          </Box>
          <Actions>
            <Submit activeOpacity={0.9} onPress={this.toNextStep}>
              <SubmitText>Next</SubmitText>
            </Submit>
            <Question>Have an account? <QuestionRoute>Sign in!</QuestionRoute></Question>
          </Actions>
        </Container>
      </Wrapper>
    );
  }
}

export default Register;