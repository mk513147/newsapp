import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsDetail from './Components/NewsDetail';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <News pageSize={7}/>
          <NewsDetail />
      </div>
    )
  }
}
