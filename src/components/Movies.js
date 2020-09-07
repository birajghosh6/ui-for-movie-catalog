import React, { Component } from 'react'
import MovieItem from './MovieItem'

export default class Movies extends Component {
    
    render() {
        return <div style={{}}>
            {this.props.movies.map(
            movieItem => (
                <MovieItem key={movieItem.movieId} movieItem= {movieItem} />
            )
        )}
        </div>
    }
}
