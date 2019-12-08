import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container, Content, Button, Text} from 'native-base';
import {storeData} from '../../utils/AsyncStorage';
import {addOrRemoveHelper} from '../../utils/addOrRemoveHelper';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import { getMoviesByTitle } from '../../actions';


export class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movieList: {},
            title: '',
            favourites: {}
        }

        this.addOrRemoveFF = this.addOrRemoveFF.bind(this);
        this.handleMovieTitle = this.handleMovieTitle.bind(this);
        this.requestMoviesByTitle = this.requestMoviesByTitle.bind(this);
    }

    static navigationOptions = {
        left: (<Button
            title={'FFs'}
            onPress={() => {
                this.props.navigation.navigate('FavouritesList')
            }}
        />),
        title: 'IMDB',
        headerStyle: {
            backgroundColor: 'darkblue',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        }
    };

    componentDidMount() {
        storeData('favourites', JSON.stringify({}));
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.movie && nextProps.movie.movieList !== prevState.movieList) {
            return ({ movieList: nextProps.movie.movieList });
        }
        return null; 
    }

    handleMovieTitle(title) {
        this.setState({title});
    }

    requestMoviesByTitle() {
        const {title} = this.state;
        this.props.getMoviesByTitle(title);
    }

    goToFavouriteList() {
        this.props.navigation.navigate('FavouriteList');
    }

    async addOrRemoveFF(movie) {
        const favourites = await addOrRemoveHelper(movie);
        this.setState({favourites});
        return favourites;
    }

    render() {
        const {favourites, movieList} = this.state;
        return (
            <Container>
                <Content>
                    <Button full dark onPress={() => this.goToFavouriteList()}>
                        <Text>
                            My favourites
                        </Text>
                    </Button>
                    <SearchBar handleTextChange={this.handleMovieTitle} handleSearchButton={this.requestMoviesByTitle}/>
                    <MovieList movieList={movieList} addOrRemoveFF={this.addOrRemoveFF} favourites={favourites} navigation={this.props.navigation}/>
                </Content>
            </Container>
    );
    }
}

export default connect(
    state => ({
        movie: state.movie
    }),
    dispatch => ({
        getMoviesByTitle: title => dispatch(getMoviesByTitle(title))
    })
)(Movie);