import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import "./App.css";

function App(){
  return <HashRouter>
    <Navigation />
    <Route path="/" exact ={true} component={Home} />
    <Route path ="/about" component={About}/>
    <Route path ="/movie/:id" component={Detail}/>
  </HashRouter>;
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
//     image: "url",
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
