import React from 'react';
import {shallow} from 'enzyme';
import {create} from 'react-test-renderer';
import Registry from '../components/Registry';

// Disable warning: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation.
// To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver.
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// Fix referenceError: You are trying to `import` a file after the Jest environment has been torn down.
jest.useFakeTimers();

describe('<Registry />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(<Registry />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Enzyme tests', () => {
    it('allows us to loading new avatar', () => {
      const wrapper = shallow(<Registry />);

      wrapper.setState({image: '/images/'});
      expect(wrapper.state().image).toEqual('/images/');

      expect(wrapper.find('Registry__Ava')).toHaveLength(1);
    });

    it('allows us to simulate change event', () => {
      const wrapper = shallow(<Registry />);

      expect(wrapper.find('FloatingLabelInput')).toHaveLength(4);

      wrapper
        .find('FloatingLabelInput')
        .at(0)
        .props()
        .changeHandle('username@test');
      expect(wrapper.state().username).toEqual('username@test');

      wrapper
        .find('FloatingLabelInput')
        .at(1)
        .props()
        .changeHandle('email@test');
      expect(wrapper.state().email).toEqual('email@test');

      wrapper
        .find('FloatingLabelInput')
        .at(2)
        .props()
        .changeHandle('password@test');
      expect(wrapper.state().password).toEqual('password@test');

      wrapper
        .find('FloatingLabelInput')
        .at(3)
        .props()
        .changeHandle('password_check@test');
      expect(wrapper.state().passwordCheck).toEqual('password_check@test');
    });
  });
});