import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import FloatingLabelInput from '../components/FloatingLabelInput';

// const props = {
//   value: 'Some test input value',
//   secureTextEntry: true,
//   changeHandle: (props = 'props') => {
//     return value => {
//       return {
//         [props]: value
//       }
//     };
//   },
// }

// describe('<FloatingLabelInput />', () => {
//   describe('Jest tests', () => {
//     it('renders correctly without props', () => {
//       const tree = create(<FloatingLabelInput />).toJSON();
//       expect(tree).toMatchSnapshot();
//     });

//     it('renders correctly with props', () => {
//       const tree = create(
//         <FloatingLabelInput 
//           {...props}
//         />
//       ).toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });

//   describe('Enzyme test', () => {
//     it('allows us to change text input value', () => {
//       const wrapper = shallow(
//         <FloatingLabelInput
//           {...props}
//         />
//       );
//       expect(wrapper).toMatchSnapshot();
//     });
//   });
// });