import React from 'react';
import Row from './component/Row/Row';
import requests from './requests';
import Banner from './component/Banner/Banner';
import Nav from './component/Nav/Nav';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true}/>

      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Actionmovies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/>
    </div>
  );
}

export default App;
