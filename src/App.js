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


const newsData = [
  {
    path: "/",
    key: "general",
    category: "general"
  },
  {
    path: "/business",
    key: "business",
    category: "business"
  },
  {
    path: "/entertainment",
    key: "entertainment",
    category: "entertainment"
  },
  {
    path: "/health",
    key: "health",
    category: "health"
  },
  {
    path: "/science",
    key: "science",
    category: "science"
  },
  {
    path: "/sports",
    key: "sports",
    category: "sports"
  },
  {
    path: "/technology",
    key: "technology",
    category: "technology"
  },
]
export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {
              newsData.map((element) => (
                <Route exact path={element.path} element={<News key={element.key} pageSize={this.pageSize} country="in" category={element.category} />} />
              ))
            }
          </Routes>
          <NewsDetail />
        </BrowserRouter>
      </div>
    )
  }
}
