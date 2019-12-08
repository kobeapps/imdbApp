import React from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Text, Left, Body, Right} from 'native-base';

export const DetailsCard = ({movieDetails}) => <Card>
    <CardItem>
        <Text>{movieDetails.Title}</Text>
    </CardItem>
    <CardItem>
        <Image
            style={{ height: 300, flex: 1 }}
            source={{uri: movieDetails.Poster}}
        />
    </CardItem>
    <CardItem>
        <Left>
            <Text>
                <Text>Rating {movieDetails.imdbRating}</Text>
            </Text>
        </Left>
        <Body>
            <Text>
                <Text>Year: {movieDetails.Year}</Text>
            </Text>
        </Body>
        <Right>
            <Text>Country: {movieDetails.Country}</Text>
        </Right>
    </CardItem>
    <CardItem>
        <Text>
            {movieDetails.Plot}
        </Text>
    </CardItem>
</Card>;