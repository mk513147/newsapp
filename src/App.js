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
import LoadingBar from 'react-top-loading-bar'


const newsData = [
  {
    path: "/",
    key: 'k1',
    category: "general"
  },
  {
    path: "/business",
    key: 'k2',
    category: "business"
  },
  {
    path: "/entertainment",
    key: 'k3',
    category: "entertainment"
  },
  {
    path: "/health",
    key: 'k4',
    category: "health"
  },
  {
    path: "/science",
    key: 'k6',
    category: "science"
  },
  {
    path: "/sports",
    key: 'k7',
    category: "sports"
  },
  {
    path: "/technology",
    key: 'k8',
    category: "technology"
  },
]
export default class App extends Component {
  pageSize = 15;
  state = {
    progress: 0
  }

  setProgress = (progress)=> {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='cyan'
            height={2}
            progress={this.state.progress}
          />
          <Routes>
            {
              newsData.map((element) => (
                <Route exact path={element.path} element={<News setProgress={this.setProgress} key={element.key} pageSize={this.pageSize} country="in" category={element.category} />} />
              ))
            }
          </Routes>
          <NewsDetail />
        </BrowserRouter>
      </div>
    )
  }
}
