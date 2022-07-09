import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {
  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => {
        return (
          <div>
          <h4>Name: {movie.title}</h4>
          <p>Time: {movie.time}</p>
          Genres:
          <ul>{movie.genres.map((genre) => { 
            return <li>{genre}</li>;
          })}
          </ul>
          </div>
        );
      })}
      </div>
    );
};
}

export default Movies;
