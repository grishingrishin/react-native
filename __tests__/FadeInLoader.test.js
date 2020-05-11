import React from 'react';
import { create } from 'react-test-renderer';
import FadeInLoader from '../components/FadeInLoader';
import { Text } from 'react-native';

// Disable warning: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. 
// To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver.
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// Fix referenceError: You are trying to `import` a file after the Jest environment has been torn down.
jest.useFakeTimers();

describe('<FadeInLoader />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(
        <FadeInLoader>
          <Text>Some test node</Text>
        </FadeInLoader>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
