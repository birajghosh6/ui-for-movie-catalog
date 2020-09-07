import React, { Component } from 'react'

export default class MovieItem extends Component {
    render() {
        return (
            <div    style={{
                        backgroundColor: '#DCC943',
                        width: '70%',
                        margin: 'auto'
                    }} 
                    key={this.props.movieItem.movieId} >
                <h3 style={{
                    backgroundColor: "#2B1D12",
                    color:'#fff',
                    padding: '10px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontFamily: 'Copperplate'
                    }}>
                    {this.props.movieItem.movie_name}
                </h3>
                <p style={{
                    padding:'15px',
                    textAlign: 'center',
                    fontFamily: 'Verdana'
                    }}>
                    {this.props.movieItem.movie_desc}
                </p>
            </div>
        )
    }
}
