import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
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
  margin: 32px 14px;
`;

const Title = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-size: 32px;
  font-family: Roboto-Thin;
  color: #fff;
`;

const Box = styled.View`
  padding: 0 14px;
`;

const Figure = styled.View`
  margin-bottom: 32px;
  align-items: center;
`;

const Ava = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 120px;
`;

const Upload = styled.Image`
  width: 150px;
  height: 150px;
`;

const Figcaption = styled.Text`
  margin-top: 14px;
  font-size: 28px;
  font-family: Roboto-Light;
  color: #fff;
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

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      image: null,
    };
  }

  changeTextHandler = props => value => {
    return this.setState({
      [props]: value,
    });
  }

  pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      return result;
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { image } = this.state;

    return (
      <Container source={require('../assets/auth-bg.jpg')}>
        <Header>
          <Title>
            Create your account
          </Title>
        </Header>
        <FadeInLoader>
          <Box>
            <Figure>
              <TouchableWithoutFeedback onPress={this.pickImage}>
                { image ? <Ava source={{ uri: image }} /> : <Upload source={require('../assets/upload.png')} /> }
              </TouchableWithoutFeedback>
              <Figcaption>Upload your photo</Figcaption>
            </Figure>
            <Group>
              <FloatingLabelInput
                value={this.state.name}
                placeholder='Username'
                changeHandle={this.changeTextHandler('username')}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.email}
                placeholder='Email address'
                changeHandle={this.changeTextHandler('email')}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.password}
                placeholder='Password'
                changeHandle={this.changeTextHandler('password')}
              />
            </Group>
          </Box>
        </FadeInLoader>
        <Actions>
          <Submit activeOpacity={0.9}>
            <SubmitText>Sign up</SubmitText>
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

export default Register;