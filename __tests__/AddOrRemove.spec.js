import React from 'react';
import { shallow } from 'enzyme';
import { Button, Text } from 'native-base';
import renderer from 'react-test-renderer';
import AddOrRemove from '../src/components/FavouriteList/AddOrRemove';

describe('Basic testing of AddOrRemove component', () => {
    it('renders correctly', () => {
        renderer.create(<AddOrRemove/>);
    });    
});

describe('Button testing', () => {

    const mockFavourites = {
          "tt0242423": {
            "Title": "Dude, Where's My Car?",
            "Year": "2000",
            "imdbID": "tt0242423",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzRmN2NjNzktOWE1My00NjVlLWFhNjYtZmFkMzM5YTA2ZTFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          },
          "tt3813310": {
            "Title": "Cop Car",
            "Year": "2015",
            "imdbID": "tt3813310",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTMyMDc5OTUwMl5BMl5BanBnXkFtZTgwMjEwNjc3NTE@._V1_SX300.jpg"
          }
      }

    const wrapper = shallow(<AddOrRemove favourites={mockFavourites} movie={mockFavourites["tt0242423"]} />);
          
    it('Should have one button', () => {
        expect(wrapper.find(Button).length).toBe(1);
    });
});
