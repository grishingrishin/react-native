import React, {Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-picker';
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

interface RState {
  username: string;
  email: string;
  password: string;
  passwordCheck: string;
  image: string;
  pickImageIsOpen: boolean;
}

class Register extends Component<{}, RState> {
  constructor(props: object) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      image: '',
      pickImageIsOpen: false,
    };
  }

  private handleUser = (username: string): void => {
    this.setState({
      username,
    });
  };

  private handleEmail = (email: string): void => {
    this.setState({
      email,
    });
  };

  private handlePassword = (password: string): void => {
    this.setState({
      password,
    });
  };

  private handlePasswordCheck = (passwordCheck: string): void => {
    this.setState({
      passwordCheck,
    });
  };

  private chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('response', JSON.stringify(response));
        this.setState({
          image: response.uri,
        });
      }
    });
  };

  public render() {
    return (
      <Container source={require('../assets/auth-bg.jpg')}>
        <Header>
          <Title>Create your account</Title>
        </Header>
        <FadeInLoader>
          <Box>
            <Figure>
              <TouchableWithoutFeedback onPress={this.chooseImage}>
                {this.state.image ? (
                  <Ava source={{uri: this.state.image}} />
                ) : (
                  <Upload source={require('../assets/upload.png')} />
                )}
              </TouchableWithoutFeedback>
              <Figcaption>Upload your photo</Figcaption>
            </Figure>
            <Group>
              <FloatingLabelInput
                value={this.state.username}
                placeholder="Username"
                changeHandle={this.handleUser}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.email}
                placeholder="Email address"
                changeHandle={this.handleEmail}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.password}
                placeholder="Password"
                secureTextEntry={true}
                changeHandle={this.handlePassword}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.passwordCheck}
                placeholder="Password check"
                secureTextEntry={true}
                changeHandle={this.handlePasswordCheck}
              />
            </Group>
          </Box>
        </FadeInLoader>
        <Actions>
          <Submit activeOpacity={0.9}>
            <SubmitText>Sign up</SubmitText>
          </Submit>
          <Question path="/" route="Sign in!" question="Have an account?" />
        </Actions>
      </Container>
    );
  }
}

export default Register;
