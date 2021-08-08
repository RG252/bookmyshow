import  {Route}  from "react-router-dom";

import DefaultHOC from "./HOC/Default.HOC";
import Movie from "./pages/Movie.page";

//pages
import HomePage from "./pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieHOC from "./HOC/Movie.HOC";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component = {HomePage} />
      <MovieHOC path="/movie/:id" exact component = {Movie} />
    </>
  );
};

export default App;