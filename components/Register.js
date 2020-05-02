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

const WrapperInput = styled.View`
  padding: 0 16px;
`;

const TextInput = styled.TextInput`
  padding: 16px 14px;
  font-family: Roboto-Light;
  border-bottom-width: 1px;
  border-bottom-color: #d3c8e6;
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
      date: {
        ...this.state.data,
        firstName
      }
    });
  }

  changeSecondNameHandler = secondName => {
    return this.setState({
      date: {
        ...this.state.data,
        secondName
      }
    });
  }

  changeGenderHandler = gender => {
    return this.setState({
      date: {
        ...this.state.data,
        gender
      }
    });
  }

  changeDateHandler = date => {
    return this.setState({
      date: {
        ...this.state.data,
        date
      }
    });
  }

  toNextStep = () => {}

  render() {
    return (
      <Wrapper>
        <Container source={require('../assets/auth-bg.jpg')}>
          <Header>
            <Title accessibilityRole='header'>
              Register <Step>Step<Count> 2</Count></Step>
            </Title>
          </Header>
          <WrapperInput>
            <TextInput
              onChangeText={text => this.changeFirstNameHandler(text)}
              placeholder='First Name'
            />
            <TextInput
              onChangeText={text => this.changeSecondNameHandler(text)}
              placeholder='Second Name'
            />
            <TextInput
              onChangeText={text => this.changeGenderHandler(text)}
              placeholder='Gender'
            />
            <TextInput
              onChangeText={text => this.changeDateHandler(text)}
              placeholder='Date of Birth'
            />
          </WrapperInput>
          <Action>
            <Submit activeOpacity={0.9} onPress={this.toNextStep}>
              <SubmitText>Next</SubmitText>
            </Submit>
          </Action>
        </Container>
      </Wrapper>
    );
  }
}

export default Register;