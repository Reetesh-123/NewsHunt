import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { useState } from 'react';
import { render } from "react-dom";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const api="d2447131379542a6bf8b22a610990eed"
  const [progress, setProgress] = useState(0);

    return (
      <div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() =>setProgress(0)}
      />
      <Navbar/>
      <Routes>
          <Route exact path="/"  element={<News setProgress={setProgress} api={api}  key={"/general"} pageSize={6} country='in' category='general'/>}></Route>      
          <Route exact path="/general"  element={<News setProgress={setProgress} api={api} key={"/general"} pageSize={6} country='in' category='general'/>}></Route>      
          <Route exact path="/business"  element={<News setProgress={setProgress}  api={api}  key={"business"} pageSize={6} country='in' category='business'/>}></Route>
          <Route exact path="/entertainment"  element={<News setProgress={setProgress}  api={api}  key={"entertainment"} pageSize={6} country='in' category='entertainment'/>}></Route>
          <Route exact path="/health"  element={<News setProgress={setProgress}  api={api}  key={"health"} pageSize={6} country='in' category='health'/>}></Route>
          <Route exact path="/science"  element={<News setProgress={setProgress}  api={api}  key={"science"} pageSize={6} country='in' category='science'/>}></Route>
          <Route exact path="/sports"  element={<News setProgress={setProgress}  api={api}  key={"sports"} pageSize={6} country='in' category='sports'/>}></Route>
          <Route exact path="/technology"  element={<News setProgress={setProgress} api={api}  key={"technology"} pageSize={6} country='in' category='technology'/>}></Route>
      </Routes>
      </Router>


      </div>
    )
}

export default  App