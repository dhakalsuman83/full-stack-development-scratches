const base_URL = 'https://api.themoviedb.org/3';
const api_key = '?api_key=db5aa479f09189d059e839777dcb08f9';
const poster_URL = 'https://image.tmdb.org/t/p/original/';

$.ajax(`${base_URL}/movie/${movie_id}${api_key}`)
