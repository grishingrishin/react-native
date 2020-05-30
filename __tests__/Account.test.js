import React from 'react';
// import {shallow} from 'enzyme';
import {create} from 'react-test-renderer';
import Account from '../components/Account';

describe('<Account />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(<Account />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});