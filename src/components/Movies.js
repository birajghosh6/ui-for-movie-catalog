import React, { Component } from 'react'
import MovieItem from './MovieItem'

export default class Movies extends Component {
    
    render() {
        return <div style={{backgroundColor: '#FFFF99'}}>
            {this.props.movies.map(
            movieItem => (
                <MovieItem key={movieItem.movieId} movieItem= {movieItem} />
            )
        )}
        </div>
    }
}
