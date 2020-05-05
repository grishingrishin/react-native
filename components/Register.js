import React, { Component } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
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
  margin: 32px 14px;
`;

const MainTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-size: 32px;
  font-family: Roboto-Thin;
  color: #fff;
`;

const Box = styled.View`
  padding: 0 14px;
`;

const AvatarWrap = styled.View`
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

const UploadText = styled.Text`
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

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
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

  componentDidMount() {
    return this.getPermissionAsync();
  }

  render() {
    const { image } = this.state;

    return (
      <Container source={require('../assets/auth-bg.jpg')}>
        <Header>
          <MainTitle>
            Create your account
          </MainTitle>
        </Header>
        <FadeInLoader>
          <Box>
            <AvatarWrap>
              <TouchableWithoutFeedback onPress={this.pickImage}>
                { image ? <Ava source={{ uri: image }} /> : <Upload source={require('../assets/upload.png')} /> }
              </TouchableWithoutFeedback>
              <UploadText>Upload your photo</UploadText>
            </AvatarWrap>
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
          <Question>Have an account? <QuestionRoute>Sign in!</QuestionRoute></Question>
        </Actions>
      </Container>
    );
  }
}

export default Register;