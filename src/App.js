import React from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import "./App.css";


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  /* 비동기 함수 --> axios가 끝날 때 까지 기다림.
  async 키워드를 통해서 getMovies() 메서드가 조금 시간이 필요하고 기다려야 함을 말함. 비동기 함수를 선언 할 수 있고 await를 선언해서 코드가 접근을  */
  getMovies = async () => {
    /* ES6
        : data.data.movies --> 를 빼서 사용 하려고 할 때 이런 식의 문법 사용해서 간단하게 이용 할 수 있음.   */
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
    // this.setState({movies: movies}) --> setState의 movies / axios부터의 movies. 
  }
  /* 
    componentDidMount에서 데이터를 fetch함.
    # fetch() <-> axios  */
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 6000);

    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <section className="container">{isLoading ? <div className="loader">
        <span className="loader__text">Loading...</span>
      </div> : (
        <div className="movies">
          {movies.map(movie => (
        <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
          ))}
        </div>
      )}</section>
    )
  }
}

export default App;