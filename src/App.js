import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";


//npm i gh-pages for github pages 
// npm 
//only if you need state, you need class component : react.component
class App extends React.Component {
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

export default App;
// //state is an object. it's where you put data(dynamically changing) into component 
// class App extends React.Component {
//   state = {
//     count:0
//   };

//   //every time you call setState(), react will re-render, thus updating in UI 
//   add = () => { 
//     this.setState(current => ({count: current.count+1}))};
//   minus = () => { 
//     this.setState(current => ({count: current.count-1}))};
//   componentDidMount(){
//     console.log("componenet rendered");
//   }
//   componentDidUpdate(){
//     console.log("I just updated");
//   }
//   render() {
//     console.log("I'm rendering");
//     return (
//       <div>
//         <h1>The number is : {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

// export default App;

//to install  prop-types for prop protection, in terminal:  npm i prop-types 

// function Food(props){
//   return <div> 
//     <h2>I Like {props.name} </h2>
//     <img src={props.picture}></img>
//     <h5>Rating: {props.rating}/5.0</h5>
//     </div>;
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "https://minimalistbaker.com/wp-content/uploads/2016/02/EASY-10-ingredient-VEGAN-KIMCHI-Spicy-tangy-crunchy-DELICIOUS-vegan-glutenfree-recipe-kimchi-768x1152.jpg",
//     rating: 4.4
//   },
//   {
//     id: 2,
//     name: "삼겹살",
//     image: "data:image/jpeg;base64,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",
//     rating: 5.0
//   },
//   {
//     id:3,
//     name: "ramen",
//     image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.9995002498750624xh;center,top&resize=480:*",
//     rating: 4.1
//   },
//   {
//     id:4,
//     name: "kimbap",
//     image: "https://www.koreanbapsang.com/wp-content/uploads/2012/05/DSC_0406-1-e1536289445158.jpg",
//     rating:4.5
//   }]

//   // has to be named propTypes 
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number
// };


// function App() {
//   return (
//   <div>HELLO!!!!!
//     {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
//   </div>);
// }

// export default App;
