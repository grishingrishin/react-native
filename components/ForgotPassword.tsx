import React, {Component} from 'react';
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

interface FPState {
  email: string;
}

class ForgotPassword extends Component<{}, FPState> {
  constructor(props: object) {
    super(props);

    this.state = {
      email: '',
    };
  }

  private handleEmail = (email: string): void => {
    this.setState({
      email,
    });
  };

  public render() {
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
                placeholder="Enter your email address"
                changeHandle={this.handleEmail}
              />
            </Group>
          </Box>
        </FadeInLoader>
        <Actions>
          <Submit activeOpacity={0.9}>
            <SubmitText>Send</SubmitText>
          </Submit>
          <Question path="/" route="Sign in!" question="Have an account?" />
        </Actions>
      </Container>
    );
  }
}

export default ForgotPassword;
