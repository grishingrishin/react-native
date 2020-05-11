import React from 'react';
import { create } from 'react-test-renderer';
import FloatingLabelInput from '../components/FloatingLabelInput';

describe('<FloatingLabelInput />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(
        <FloatingLabelInput
          value='Some test text value'
          changeHandle={jest.fn()}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
