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
    movies: [],
    userId: 0,
    ratedMovies: [],
    ratings: [],
    solidYellow: '#DCC943',
    titleBlack: '#333',
    pastelYellowBackground: '#FFFF99',
    navbarBlue: '#2F3274',
    fadedBlueBackground: '#7FD1E8'
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
    console.log(newMovie);
    axios
    .post('http://localhost:9090/movieservice/addmovie', newMovie,
    //{responseType: 'json'}
    )
    .then(res => this.setState({
      movies: [...this.state.movies, res.data]
    }))
    .catch(function(error) {console.log(error)});
    
  }

  updateMovie = (updatedMovie) => {
    axios
      .put(`http://localhost:9090/movieservice/updatemovie/${updatedMovie.movieId}`, 
            updatedMovie)
      .then(res => this.setState({
          movies: [...this.state.movies.filter(
              movieItr => movieItr.movieId!==updatedMovie.movieId
          ), res.data]
      }))
      .catch(
        function (error) {console.log(error);}
      );
      alert("Movie Name: " +
            updatedMovie.movie_name +
            "\n\nSuccessfully updated!"
      );
  }

  setUserId = (receivedId) => {
    this.setState({
      userId: receivedId,
      ratedMovies: [],
      ratings: []

    });
    //console.log("From App.js");
    //console.log(receivedId);
  }

  setRatedMovies = (ratedMovie) => {
    this.setState({
      ratedMovies: [...this.state.ratedMovies,ratedMovie]
    });
    //console.log("Rated Movies:");
    //console.log(this.state.ratedMovies);
    //console.log(rated);
  }

  setRatings = (newRatings) => {
    this.setState({
      ratings: newRatings
    });
    //console.log("ratings:");
    //console.log(this.state.ratings);
    //console.log(newRatings);
  }

  render() {
    
    return (
      //this.state.movies.length!==0 ?
      <BrowserRouter>
        {
          //console.log(this.state.movies)
        }
        <header style={headerStyle}>
          <h1 
            style={{
              fontFamily: "Brush Script MT", 
              fontSize: "60px",
              paddingTop: '25px',
              paddingBottom: '-5px',
              marginTop: '-10px'
            }} 
          >
            Movie Time
          </h1>
          <h3 style = {{
            textAlign: 'right',
            marginRight: '20px',
            fontWeight: 'normal',
            paddingBottom: '0px'
          }} > 
            Active User ID : {" "}
              {this.state.userId === 0 ? 'None':this.state.userId}
          </h3>
          
        </header>
        <div 
          className="navbar" 
          style={{ 
              backgroundColor: "#DCC943", 
              padding:"10px", 
              textAlign: "center",
              width: '100%',
              marginTop: '-19px',
              //textShadow: '1px 1px 2px #333',
              fontWeight: 'bolder'
          }}
        >
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
          <Route exact path="/" render = { props => (
            <React.Fragment>
                <Home />
            </React.Fragment>
          )} />
          <Route exact path="/home" render = { props => (
            <React.Fragment>
                <Home 
                  setUserId= {this.setUserId}
                  setRatings ={this.setRatings}
                  setRatedMovies = {this.setRatedMovies}
                />
            </React.Fragment>
          )} />
          <Route exact path="/showmovies" render= { props => (
            <React.Fragment>
              <Movies movies= {this.state.movies} />
            </React.Fragment>
          )} />
          <Route exact path="/showratedmovies" render = { props => (
            <React.Fragment>
                <RatedMovies 
                  ratedMovies ={this.state.ratedMovies}
                  //ratings = {this.state.ratings}
                />
            </React.Fragment>
          )} />
          <Route exact path="/addmovie" render = { props => (
            <React.Fragment>
                <AddMovie addMovie= {this.addMovie} />
            </React.Fragment>
          )} />
          <Route exact path="/updatemovie" render = { props => (
            <React.Fragment>
                <UpdateMovie updateMovie={this.updateMovie} />
            </React.Fragment>
          )

          } />
        </div>
        
      </BrowserRouter>
      /*:
      (<div style={homePageStyle}>
            Loading...
      </div>)*/
      
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
  marginBottom: '0px'
}

const linkStyle = {
  //color: '#FFF',
  textDecoration: 'none',
  marginTop: '-20px',
  padding: '10px 30px',
  fontFamily: 'Copperplate',
  fontSize: '18px'
  
}

/*const homePageStyle = {
  textAlign: 'center',
  fontSize: '30',
  fontStyle: 'italic',
  lineHeight: '50px',
  fontWeight: 'bold',
  padding: '10%'
}*/

export default App;

