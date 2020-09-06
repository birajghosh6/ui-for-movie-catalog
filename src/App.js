import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Movies from './components/Movies';
import RatedMovies from './components/RatedMovies';
import AddMovie from './components/AddMovie';
import UpdateMovie from './components/UpdateMovie';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  

  render() {
    return (
      <BrowserRouter>
        <header style={headerStyle}>
          <h1 style={{fontFamily: "Brush Script MT", fontSize: "60px"}} >Movie Time</h1>
        </header>
        <div className="navbar" style={{ backgroundColor: "#2F3274", padding:"10px", textAlign: "center"}}>

          <Link to="/showmovies" style={linkStyle}>All Movies</Link>
          |
          <Link to="/showratedmovies" style={linkStyle}>User Ratings</Link>
          |
          <Link to="/addmovie" style={linkStyle}>Add Movie</Link>
          |
          <Link to="/updatemovie" style={linkStyle}>Update Movies</Link>
        </div>
        <div>
          <Route exact path="/showmovies" component={Movies} />
          <Route exact path="/showratedmovies" component={RatedMovies} />
          <Route exact path="/addmovie" component={AddMovie} />
          <Route exact path="/updatemovie" component={UpdateMovie} />
        </div>
      </BrowserRouter>
    );
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  textDecoration: 'none',
  padding: '1px'
}

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none',
  padding: '10px 30px'
  
}