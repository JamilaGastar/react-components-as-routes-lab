import React from 'react';
import { directors } from '../data';

class Directors extends React.Component {
  render() {
    return (
      <div>
        <h1>Directors Page</h1>
        {directors.map((director) => {
          return (
          <div>
          <h4>Name: {director.name}</h4>
          Movies:
          <ul>{director.movies.map((movie) => { 
            return <li>{movie}</li>;
          })}
          </ul>
          </div>
        );
      })}
      </div>
    );
  };
}

export default Directors
