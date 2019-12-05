import React from 'react';
import {List, Left, Right, Body, Text, Thumbnail, ListItem} from 'native-base';
import AddOrRemove from '../FavouriteList/AddOrRemove';

const goToMovieDetails = (imdbID, navigation) => {
    navigation.navigate('MovieDetails', { imdbID });
}

const MovieList = ({movieList, addOrRemoveFF, favourites, navigation}) => <List>
    {movieList && movieList.Search && movieList.Search.map(movie => (
        <ListItem noBorder key={movie.imdbID} avatar onPress={() => goToMovieDetails(movie.imdbID, navigation)}>
            <Left>
                <Thumbnail source={{ uri: movie.Poster }} />
            </Left>
            <Body>
                <Text>{movie.Title}</Text>
            </Body>
            <Right>
                <AddOrRemove movie={movie} favourites={favourites} addOrRemoveFF={addOrRemoveFF}/>
            </Right>
        </ListItem>)
    )}
</List>;

export default MovieList;