import React from 'react';
import {shallow} from 'enzyme';
import {create} from 'react-test-renderer';
import SearchInput from '../components/Search';

const state = {isOpen: true, searchValue: 'Some test search value'};

describe('<SearchInput />', () => {
  describe('Jest tests', () => {
    it('renders correctly', () => {
      const tree = create(<SearchInput />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Enzyme tests', () => {
    it('allows us to set some state', () => {
      const wrapper = shallow(<SearchInput />);

      wrapper.setState({isOpen: state.isOpen, searchValue: state.searchValue});

      expect(wrapper.state().isOpen).toEqual(state.isOpen);
      expect(wrapper.state().searchValue).toEqual(state.searchValue);
    });

    it('allows us to simulate change event', () => {
      const wrapper = shallow(<SearchInput />);
      const instanceOf = wrapper.instance();

      instanceOf.handleOpen();
      expect(wrapper.state().isOpen).toEqual(state.isOpen);

      instanceOf.handleChange(state.searchValue);
      expect(wrapper.state().searchValue).toEqual(state.searchValue);
    });
  });
});
