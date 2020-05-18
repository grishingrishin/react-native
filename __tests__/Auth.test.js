import React from 'react';
import {shallow} from 'enzyme';
import {create} from 'react-test-renderer';
import Auth from '../components/Auth';

// Disable warning: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation.
// To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver.
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// Fix referenceError: You are trying to `import` a file after the Jest environment has been torn down.
jest.useFakeTimers();

describe('<Auth />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(<Auth />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Enzyme tests', () => {
    it('allows us to set some state', () => {
      const wrapper = shallow(<Auth />);

      wrapper.setState({
        login: 'test@test',
        password: 'testtesttest',
      });

      expect(wrapper.state().login).toEqual('test@test');
      expect(wrapper.state().password).toEqual('testtesttest');
    });

    it('allows us to simulate change event', () => {
      const wrapper = shallow(<Auth />);

      expect(wrapper.find('FloatingLabelInput')).toHaveLength(2);

      wrapper
        .find('FloatingLabelInput')
        .first()
        .props()
        .changeHandle('test@test');
      expect(wrapper.state().login).toEqual('test@test');

      wrapper
        .find('FloatingLabelInput')
        .last()
        .props()
        .changeHandle('testtesttest');
      expect(wrapper.state().password).toEqual('testtesttest');

      expect(wrapper).toMatchSnapshot();
    });
  });
});
