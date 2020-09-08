import React, { Component } from 'react'
//import axios from 'axios';

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
                This is a list of movies rated by the user
            </div>
        );
    }
}
