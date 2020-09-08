import React, { Component } from 'react'
import MovieItem from './MovieItem'

export default class Movies extends Component {
    
    render() {
        return <body style={{
                        backgroundColor: '#FFFF99',
                        position: 'fixed',
                        width: '100%',
                        height: '100%'
                        }}
                >
            {this.props.movies.map(
            movieItem => (
                <MovieItem key={movieItem.movieId} movieItem= {movieItem} />
            )
        )}
        </body>
    }
}
