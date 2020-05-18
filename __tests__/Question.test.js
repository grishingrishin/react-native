import React from 'react';
import {create} from 'react-test-renderer';
import Question from '../components/Question';

describe('<Question />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(
        <Question
          question="Some test text question"
          route="Some test text route"
          path="/some_test_path"
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
