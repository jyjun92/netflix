import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

//redux : allows to keep status away from. no need to reload the movie data again 
//npm i gh-pages for github pages 
// npm 
//only if you need state, you need class component : react.component
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getmovies = async() => {
    //awiat= wait for this axios function to finish in order to continue 
    const { 
      data:{
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
      );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount(){
    //axios = nice little later on top of fetch. npm install axios
    this.getmovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? 
        (<div className="loader">
          <span className="loader__text">Loading..</span>
        </div>
        ) : (
          <div className="movies">
          { movies.map(movie => (
          <Movie 
          id = {movie.id} 
          year = {movie.year} 
          title = {movie.title} 
          summary = {movie.summary} 
          poster = {movie.medium_cover_image} 
          genres = {movie.genres}
          />
        ))}
        </div>
        )}
      </section>
      );
  }
}

export default Home;