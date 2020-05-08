import React from 'react';
import renderer from 'react-test-renderer';
import ForgotPassword from '../components/ForgotPassword';

// Disable warning: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. 
// To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver.
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// Fix referenceError: You are trying to `import` a file after the Jest environment has been torn down.
jest.useFakeTimers();

describe('<ForgotPassword />', () => {
  it('renders correctly', () => {
    let tree = renderer.create(<ForgotPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});