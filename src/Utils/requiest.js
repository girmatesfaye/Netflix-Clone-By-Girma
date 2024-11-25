const API_KEY = process.env.REACT_APP_API_KEY;
const requiest = { 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`, 
    feachingActionMovie: `/discover/movie?api_key=${API_KEY}&with_genre=28`, 
    fetchComedy:`/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrors:`/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomance:`/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentary:`/discover/movie?api_key=${API_KEY}&with_genre=99`,
    fetchTvShow:`/genre/tv/list?api_key=${API_KEY}&with_genre=10759`
};
export default requiest

https://api.themoviedb.org/3/genre/movie/list?api_key=1fd2fbe1bbe5a71860e132318385614b&language=en

