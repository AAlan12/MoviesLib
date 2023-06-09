import styles from './styles.module.css'
import MovieCard from '../../components/MovieCard'
import { useState, useEffect } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Melhores filmes:</h2>
      <div className={styles.movies_container}>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && 
        topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

    </div>
  );
}

export default Home;