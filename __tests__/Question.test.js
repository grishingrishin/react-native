import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Question from '../components/Question';

const props = {
  question: 'Some test text question',
  route: 'Some test text route',
  path: '/some_test_path',
}

describe('<Question />', () => {
  describe('Jest tests', () => {
    it('renders correctly without props', () => {
      const tree = create(<Question />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders correctly with props', () => {
      const tree = create(
        <Question 
          {...props}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Enzyme test', () => {
    it('allow us to set props and examp it value in nodes', () => {
      const wrapper = shallow(
        <Question
          {...props}
        />
      );

      const questionText = wrapper.find('Question').first();
      expect(questionText.text()).toEqual(props.question + ' ');  // Space important

      const routeText = wrapper.find('Question__Route').first();
      expect(routeText.text()).toEqual(props.route);

      expect(wrapper.find('Link').props().to).toEqual(props.path);
    });
  });
});
