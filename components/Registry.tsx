import React, { Component } from 'react';
import { TouchableWithoutFeedback, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
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

const ModalInner = styled.TouchableHighlight`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
`;

const ModalCard = styled.View`
  width: 80%;
  padding: 18px 14px 0 14px;
  background-color: #fff;
`;

const ModalTitle = styled.Text`
  margin-bottom: 12px
  padding-bottom: 12px;
  font-size: 18px;
  line-height: 18px;
  font-family: Roboto-Medium;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

const ModalText = styled.Text`
  margin-bottom: 18px;
  font-size: 16px;
`;

interface RegisterState {
  username: string,
  email: string,
  password: string,
  passwordCheck: string,
  image: string,
  pickImageModal: boolean,
}

class Register extends Component<{}, RegisterState> {
  constructor(props: object) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      image: '',
      pickImageModal: false,
    };
  }

  handleUser = (username: string) => {
    return this.setState({
      username, 
    });
  }

  handleEmail = (email: string) => {
    return this.setState({
      email, 
    });
  }

  handlePassword = (password: string) => {
    return this.setState({
      password, 
    });
  }

  handlePasswordCheck = (passwordCheck: string) => {
    return this.setState({
      passwordCheck, 
    });
  }

  pickImage = () => {
    if (!this.state.pickImageModal) {
      return this.setState({
        pickImageModal: true
      });
    }
  }

  loadImageFromDevice = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        return this.setState({
          image: result.uri,
          pickImageModal: false,
        });
      }

      return false;
    } catch (e) {
      console.log(e);
    }
  }

  loadImageFromCamera = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        return this.setState({
          image: result.uri,
          pickImageModal: false,
        });
      }

      return false;
    } catch (e) {
      console.log(e);
    }
  }

  removeImage = () => {
    return this.setState({
      image: '',
      pickImageModal: false,
    });
  }

  closedPickImageModal = () => {
    if (this.state.pickImageModal) {
      return this.setState({
        pickImageModal: false,
      });
    }
  }

  render() {
    const { image } = this.state;

    return (
      <Container source={require('../assets/auth-bg.jpg')}>
        <Modal transparent={true} visible={this.state.pickImageModal}>
          <ModalInner onPress={this.closedPickImageModal}>
            <ModalCard>
              <ModalTitle>Сменить фото профиля</ModalTitle>
              <TouchableWithoutFeedback onPress={this.loadImageFromDevice}>
                <ModalText>Загрузить с устройства</ModalText>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={this.loadImageFromCamera}>
                <ModalText>Сделать снимок</ModalText>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={this.removeImage}>
                <ModalText>Удалить фото</ModalText>
              </TouchableWithoutFeedback>
            </ModalCard>
          </ModalInner>
        </Modal>
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
                value={this.state.username}
                placeholder='Username'
                changeHandle={this.handleUser}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.email}
                placeholder='Email address'
                changeHandle={this.handleEmail}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.password}
                placeholder='Password'
                secureTextEntry={true}
                changeHandle={this.handlePassword}
              />
            </Group>
            <Group>
              <FloatingLabelInput
                value={this.state.passwordCheck}
                placeholder='Password check'
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