import React from 'react';
import {Input, Button, Text, Item} from 'native-base';

const SearchBar = ({handleTextChange, handleSearchButton}) => <Item>
    <Input onChangeText={text => handleTextChange(text)} placeholder='Search bar'/>
    <Button onPress={() => handleSearchButton()}>
        <Text>
            Search
        </Text>
    </Button>
</Item>;

export default SearchBar;