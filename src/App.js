import React, { Component } from 'react';
import './App.css';
import requests from './requests';
import Row from './Rows';
import Banner from './Banner';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignupPage from "./SignupPage";




function App() {
  
  return (
    
    <Router>
    <div className="App">
      {/*nav bar*/}
      <Nav />
      
      
      {/*banner*/}
      <Banner />
      <Route path="/signuppage" component={SignupPage}/>
      <Row 
      title="New Releases" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow 
      />
      <Row title="Trendings" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovie}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovie}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovie}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovie}/>
      
    </div>
    </Router>
  );
}

export default App;
