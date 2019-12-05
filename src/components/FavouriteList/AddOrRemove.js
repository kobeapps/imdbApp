import React from 'react';
import {Button, Text} from 'native-base';

const AddOrRemove = ({favourites, movie, addOrRemoveFF}) => <Button transparent onPress={() => addOrRemoveFF(movie)}>
    <Text style={{color: 'blue'}}>
        {favourites && favourites[movie.imdbID] && 'Erase'}
        {((favourites === []) || (favourites && !favourites[movie.imdbID])) && 'Add'}
    </Text>
</Button>;

export default AddOrRemove;