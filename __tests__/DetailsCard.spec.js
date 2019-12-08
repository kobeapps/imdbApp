import React from 'react';
import {shallow} from 'enzyme';
import {Card, CardItem} from 'native-base';
import {Image} from 'react-native';
import renderer from 'react-test-renderer';

import {DetailsCard} from '../src/components/MovieDetails/DetailsCard';
import { exportAllDeclaration } from '@babel/types';

const mockMovieDetails = {
    Title: 'mock title',
    Poster: "http://somethatgetanimage.com",
    imdbRating: 7,
    Year: '2008',
    Country: 'Australia',
    Plot: 'mock plot'
};

it('renders correctly', () => {
    renderer.create(<DetailsCard movieDetails={mockMovieDetails}/>);
});
  
const wrapper = shallow(<DetailsCard movieDetails={mockMovieDetails}/>);

describe('Content of Details Card', () => {

    it('Should have 1 Card', () => {
        expect(wrapper.find(Card).length).toBe(1);
    });

    it('Should have 4 CardItems', () => {
        expect(wrapper.find(CardItem).length).toBe(4);
    });

    it('Should have 1 image', () => {
        expect(wrapper.find(Image).length).toBe(1);
    });

});
