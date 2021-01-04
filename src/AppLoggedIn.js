import React, { Component } from 'react';
import './App.css';
import requests from './requests';
import RowLoggedIn from './RowsLoggedIn';
import Banner from './Banner';
import NavLoggedOut from './NavLoggedOut';
import fire from './config/Fire';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogoutPage from './LogoutPage';




function AppLoggedIn() {
    
    
  
  return (
    <Router>
    <div className="App">
      {/*nav bar*/}
      <NavLoggedOut />
      {/*banner*/}
      
      <Route path="/logoutpage" component={LogoutPage}/>
      
      <RowLoggedIn 
      title="New Releases" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow 
      />
      
      <RowLoggedIn title="Trendings" fetchUrl={requests.fetchTrending}/>
      <RowLoggedIn title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <RowLoggedIn title="Comedies" fetchUrl={requests.fetchComedyMovie}/>
      <RowLoggedIn title="Action" fetchUrl={requests.fetchActionMovie}/>
      <RowLoggedIn title="Horror" fetchUrl={requests.fetchHorrorMovie}/>
      <RowLoggedIn title="Romance" fetchUrl={requests.fetchRomanceMovie}/>
      
    </div></Router>
  );
}

export default AppLoggedIn;
