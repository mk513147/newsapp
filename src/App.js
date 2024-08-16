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
    id: 1,
    category: "general"
  },
  {
    path: "/business",
    id: 2,
    category: "business"
  },
  {
    path: "/entertainment",
    id: 3,
    category: "entertainment"
  },
  {
    path: "/health",
    id: 4,
    category: "health"
  },
  {
    path: "/science",
    id: 6,
    category: "science"
  },
  {
    path: "/sports",
    id: 7,
    category: "sports"
  },
  {
    path: "/technology",
    id: 8,
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
                <Route exact path={element.path} key={element.id} element={<News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category={element.category} />} />
              ))
            }
          </Routes>
          <NewsDetail />
        </BrowserRouter>
      </div>
    )
  }
}
