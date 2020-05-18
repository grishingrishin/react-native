import React from 'react';
import {shallow} from 'enzyme';
import {create} from 'react-test-renderer';
import ForgotPassword from '../components/ForgotPassword';

// Disable warning: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation.
// To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver.
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// Fix referenceError: You are trying to `import` a file after the Jest environment has been torn down.
jest.useFakeTimers();

describe('<ForgotPassword />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(<ForgotPassword />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Enzyme tests', () => {
    it('allows us to set some state', () => {
      const wrapper = shallow(<ForgotPassword />);

      wrapper.setState({email: 'test@test.com'});
      expect(wrapper.state().email).toEqual('test@test.com');
    });

    it('allows us to simulate change event', () => {
      const wrapper = shallow(<ForgotPassword />);
      const floatingLabelInput = wrapper.find('FloatingLabelInput');

      floatingLabelInput.props().changeHandle('test@test.com');
      expect(wrapper.state().email).toEqual('test@test.com');

      expect(wrapper).toMatchSnapshot();
    });
  });
});
