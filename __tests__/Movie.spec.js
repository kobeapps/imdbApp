import React from 'react';
import {shallow, mount} from 'enzyme';
import {Button} from 'native-base';
import renderer from 'react-test-renderer';

import {Movie} from '../src/components/Movie';

jest.mock('@react-native-community/async-storage');

it('renders correctly', () => {
  renderer.create(<Movie />);
});

it('Should have one button', () => {
  const wrapper = shallow(<Movie/>);
  expect(wrapper.find(Button).length).toBe(1);
});
