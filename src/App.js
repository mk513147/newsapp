import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsDetail from './Components/NewsDetail';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" category='general' />} />
            <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category='business' />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category='entertainment' />} />
            <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category='health' />} />
            <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category='science' />} />
            <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category='sports' />} />
            <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country="in" category='technology' />} />
          </Routes>
          <NewsDetail />
        </BrowserRouter>
      </div>
    )
  }
}
