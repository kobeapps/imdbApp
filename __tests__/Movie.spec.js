import React from 'react';
import {shallow} from 'enzyme';
import {Button} from 'native-base';
import renderer from 'react-test-renderer';

import {Movie} from '../src/components/Movie';

it('renders correctly', () => {
  renderer.create(<Movie />);
});

const wrapper = shallow(<Movie/>);

it('Should have one button', () => {
  expect(wrapper.find(Button).length).toBe(1);
});

it('Should assign Title', () => {

    const movieInstance = wrapper.instance();
    expect(movieInstance.state.title).toBe('');
    movieInstance.handleMovieTitle('testing title');
    expect(movieInstance.state.title).toBe('testing title');
    
});