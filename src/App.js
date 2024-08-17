import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsDetail from './Components/NewsDetail';
import './App.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import React, { useState } from 'react'
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

const App = ()=> {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='cyan'
            height={2}
            progress={progress}
          />
          <Routes>
            {
              newsData.map((element) => (
                <Route exact path={element.path}  element={<News setProgress={setProgress} apiKey={apiKey} key={element.id} pageSize={pageSize} country="in" category={element.category} />} />
              ))
            }
          </Routes>
          <NewsDetail />
        </BrowserRouter>
      </div>
    )
  }

export default App