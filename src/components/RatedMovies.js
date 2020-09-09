import React, { Component } from 'react'
import MovieItem from './MovieItem'

export default class RatedMovies extends Component {

/*
    componentDidMount() {
        //console.log("ratedMovies:");
        //console.log(ratedMovies);
    }
*/
    render() {
        return (
            <div
                style = {{
                    backgroundColor: '#FFFF99',
                    position: 'fixed',
                    height: '100%',
                    width: '100%'
                }}
            >
                <div style={{
                        backgroundColor: '#FFFF99',
                        //position: 'fixed',
                        width: '100%',
                        height: '100%',
                        marginTop: '0px'
                        }} 
                >
                    {this.props.ratedMovies.map(
                    movieItem => (
                        <MovieItem key={movieItem.movieId} movieItem= {movieItem} />
                    ))}
                </div>
            </div>
        );
    }
}
