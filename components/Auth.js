import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#693fa9',
  },
  backgroundImage: {
    flex: 1,
    paddingTop: 32,
    paddingBottom: 32,
    justifyContent: 'space-between',
    resizeMode: 'cover',
  },
  header: {
    position: 'relative',
    top: '15%',
  },
  title: {
    fontFamily: 'Roboto-light',
    textAlign: 'center',
    fontSize: 42,
    color: '#fff',
  },
  auth: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  textInput: {
    paddingTop: 16,
    paddingRight: 14,
    paddingBottom: 16,
    paddingLeft: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#d3c8e6'
  },
  forgot: {
    alignItems: 'flex-end',
  },
  forgorText: {
    textTransform: 'uppercase',
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 12,
    color: '#fff',
  },
  submit: {
    alignItems: 'center',
    height: 54,
    backgroundColor: '#eb2054',
  },
  submitText: {
    textTransform: 'uppercase',
    fontSize: 18,
    lineHeight: 54,
    color: '#fff',
  },
  small: {
    marginTop: 14,
    textAlign: 'center',
    fontSize: 10,
    color: '#fff'
  },
});

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        login: '',
        password: ''
      }
    };
  }

  changeLoginHandler = text => {
    return this.setState({
      data: {
        ...this.state.data,
        login: text
      }
    });
  }

  changePasswordHandler = text => {
    return this.setState({
      data: {
        ...this.state.data,
        password: text
      }
    });
  }

  goToForgotPassword = () => {

  }

  loginHandler = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/auth-bg.jpg')} style={styles.backgroundImage}>
          <View style={styles.header}>
            <Text 
              style={styles.title} 
              accessibilityRole='header'
            >Welcome!</Text>
          </View>
          <View style={styles.auth}>
            <TextInput 
              style={{ 
                ...styles.textInput, 
                marginBottom: 32 
              }}
              onChangeText={text => this.changeLoginHandler(text)}
              value={this.state.data.login}
              placeholder='Login'
            />
            <TextInput 
              style={styles.textInput}
              onChangeText={text => this.changePasswordHandler(text)}
              value={this.state.data.password}
              secureTextEntry={true}
              placeholder='Password'
            />
            <TouchableOpacity
              style={styles.forgot}
              onPress={this.goToForgotPassword}
            >
              <Text style={styles.forgorText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.submit}
              activeOpacity={0.9}
              onPress={this.loginHandler}
            >
              <Text style={styles.submitText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Auth;