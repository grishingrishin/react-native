import React from 'react';
// import {shallow} from 'enzyme';
import {create} from 'react-test-renderer';
import SideMenu from '../components/SideMenu';

describe('<SideMenu />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(<SideMenu />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});