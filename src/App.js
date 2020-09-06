import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Movies from './components/Movies';
import RatedMovies from './components/RatedMovies';
import AddMovie from './components/AddMovie';
import UpdateMovie from './components/UpdateMovie';
import Home from './components/Home';
import axios from 'axios';

class App extends Component {

  state = {
    movies: []
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:9091/catalog/showmovies', {
        responseType: 'json'
      })
      .then(res => 
        this.setState({
          movies: res.data
        })
      )
      .catch(function(error) {
        console.log(error);
      });
      //console.log(this.state.movies);
  }

  addMovie = (newMovie) => {
    axios
    .post('http://localhost:9090/movieservice/addmovie',
      {
        movie_name: newMovie.movie_name,
        movie_desc: newMovie.movie_desc
      }
    )
    .then(
      res => {this.setState({
        movies: [...this.state.movies, res.data]
      });
      console.log(res);
    }
    )
    .catch(
      function(error) {console.log(error);}
    )
  }

  render() {
    
    return (
      this.state.movies.length!==0 ?
      <BrowserRouter>
        {console.log(this.state.movies)}
        <header style={headerStyle}>
          <h1 style={{fontFamily: "Brush Script MT", fontSize: "60px"}} >Movie Time</h1>
        </header>
        <div className="navbar" style={{ backgroundColor: "#2F3274", padding:"10px", textAlign: "center"}}>
          <Link to="/home" style={linkStyle}>Home</Link>
          |
          <Link to="/showmovies" style={linkStyle}>All Movies</Link>
          |
          <Link to="/showratedmovies" style={linkStyle}>User Ratings</Link>
          |
          <Link to="/addmovie" style={linkStyle}>Add Movie</Link>
          |
          <Link to="/updatemovie" style={linkStyle}>Update Movies</Link>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/showmovies" render= { props => (
            <React.Fragment>
              <Movies movies= {this.state.movies} />
            </React.Fragment>
          )} />
          <Route exact path="/showratedmovies" component={RatedMovies} />
          <Route exact path="/addmovie" render = { props => (
            <React.Fragment>
              <AddMovie addMovie= {this.state.addMovie} />
            </React.Fragment>
          )} />
          <Route exact path="/updatemovie" component={UpdateMovie} />
        </div>
        
      </BrowserRouter>
      :
      <div style={homePageStyle}>
            Loading...
      </div>
      
    );
  }
}

/**
 * <h2 style={{color:"lightgrey"}}>This is the homepage. This webpage allows you to add 
                movies and rate them according to your liking. You 
                may also update your previous ratings based on your 
                new interests. Hope you have a great time browsing 
                through our collection! <br />
                <span style={{color: '#2F3274'}}>
                    Click on the links above to get started!
                </span>
            </h2>
 */

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

const homePageStyle = {
  textAlign: 'center',
  fontSize: '30',
  fontStyle: 'italic',
  lineHeight: '50px',
  fontWeight: 'bold',
  padding: '10%'
}

export default App;

