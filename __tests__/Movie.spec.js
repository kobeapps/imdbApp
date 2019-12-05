import React from 'react';
import {shallow, mount} from 'enzyme';
import {Button} from 'native-base';
import {Movie} from '../src/components/Movie';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Movie />);
});

it('Should have one button', () => {
  const wrapper = shallow(<Movie/>);
  expect(wrapper.find(Button).length).toBe(1);
});
