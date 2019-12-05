import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import DetailsCard from './DetailsCard';
import { getMovieDetailsById } from '../../actions';


export class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imdbID: ''
        };
    }

    static navigationOptions = {
        left: (<Button
            title={'Back'}
            onPress={() => {
                this.props.navigation.dispatch(NavigationActions.back())
            }}
        />),
        title: 'Details',
        headerStyle: {
            backgroundColor: 'darkblue',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
        right: (<Button
            title={'FFs'}
            onPress={() => {
                this.props.navigation.navigate('FavouritesList')
            }}
        />)
    };

    componentDidMount() {
        const {navigation} = this.props;
        const imdbID = navigation.getParam('imdbID');
        this.setState({imdbID});
        this.props.getMovieDetailsById(imdbID);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.movieDetails && nextProps.movieDetails.movieDetails !== prevState.movieDetails) {
            return ({ movieDetails: nextProps.movieDetails.movieDetails });
        }
        return null;
    }

    render() {
        const {movieDetails} = this.state;
        return (
            <Container>
                <Content>
                    {movieDetails && <View>
                        <DetailsCard movieDetails={movieDetails}/>
                    </View>}
                </Content>
            </Container>
        );
    }
}

export default connect(
    state => ({
        movieDetails: state.movieDetails
    }),
    dispatch => ({
        getMovieDetailsById: imdbID => dispatch(getMovieDetailsById(imdbID))
    })
)(MovieDetails);