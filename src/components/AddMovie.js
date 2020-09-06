import React, { Component } from 'react'

export default class AddMovie extends Component {
    state = {
        movie_name: '',
        movie_desc: ''
    }

    onChangeInput = (e) => this.setState({
            [e.target.name]: e.target.value
        });

    onSubmitMovie = (e) => {
        e.preventDefault();
        this.props.addMovie(this.state);
        this.setState({
            movie_name: '',
            movie_desc: ''
        });
    }
        
    render() {
        return (
            <div style={{   textAlign: "center", 
                            width: '90%', 
                            marginTop: '8%'
                        }}>
                <form>
                    <label htmlFor="movie_name">Movie Name</label>
                    <input  type='text' 
                            id="movie_name" 
                            name="movie_name"
                            style={inputStyle}
                            onChange={this.onChangeInput}
                            value={this.state.movie_name}
                            placeholder= "Enter a name"
                    />
                    <br />
                    <label htmlFor="movie_desc">Synopsis</label>
                    <input  type='text' 
                            id="movie_desc" 
                            name="movie_desc"
                            style={inputStyle}
                            onChange={this.onChangeInput}
                            value={this.state.movie_desc}
                            placeholder= "About the movie.."
                    />
                    <input  type="submit"
                            style={submitStyle} 
                            value="Submit"
                            onSubmit={this.onSubmitMovie}
                    />
                </form>
            </div>
        );
    }
}

const inputStyle = {
    borderRadius: '4px',
    border: '2px solid #ccc',
    boxSizing: 'border-box',
    margin: '8px',
    padding: '10px',
    width: '50%'
}

const submitStyle = {
    width: '50%', 
    backgroundColor: '#4CAF50', 
    color: '#fff', 
    margin: '8px 0px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    border: 'none',
    padding: '10px'
}

