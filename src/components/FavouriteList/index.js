import React, { Component } from 'react';
import {Container, Left, Body, Right, Title, Content, Item, List, ListItem, Button, Text} from 'native-base';

import {getData} from '../../utils/AsyncStorage';
import AddOrRemove from './AddOrRemove';
import {addOrRemoveHelper} from '../../utils/addOrRemove';

class FavouriteList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favourites: {}
        };

        this.addOrRemoveFF = this.addOrRemoveFF.bind(this);
    }

    static navigationOptions = {
        left: (<Button
            title={'Back'}
            onPress={() => {
                this.props.navigation.dispatch(NavigationActions.back())
            }}
        />),
        title: 'My favourites',
        headerStyle: {
            backgroundColor: 'darkblue',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        }
    };

    async componentDidMount() {
        const favourites = await getData('favourites');
        this.setState({
            favourites: JSON.parse(favourites)
        });
    }

    async addOrRemoveFF(movie) {
        const favourites = await addOrRemoveHelper(movie);
        this.setState({favourites});
    }

    render() {
        const {favourites} = this.state;
        return <Container>
                    <Content>
                        <List>
                            {favourites && Object.keys(favourites).map((imdbID, i) => <ListItem key={imdbID}>
                                <Left>
                                    <Body>
                                        <Text>
                                            {favourites[imdbID].Title}
                                        </Text>
                                    </Body>
                                </Left>
                                <Right>
                                    <AddOrRemove movie={favourites[imdbID]} addOrRemoveFF={this.addOrRemoveFF} favourites={favourites} />
                                </Right>
                            </ListItem>)}
                        </List>
                    </Content>
        </Container>
    }
}

export default FavouriteList;