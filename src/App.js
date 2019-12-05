import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import {Provider} from 'react-redux';

import MovieScreen from './components/Movie';
import MovieDetailsScreen from './components/MovieDetails';
import FavouriteListScreen from './components/FavouriteList';
import configureStore from './configureStore';

let store = configureStore();

const MainNavigation = createStackNavigator({
	Movie: { screen: MovieScreen },
  MovieDetails: { screen: MovieDetailsScreen },
  FavouriteList: { screen: FavouriteListScreen }
});

const AppContainer = createAppContainer(MainNavigation);


export default () => {
    return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
    );
}