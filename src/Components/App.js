import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Post from './Post'
import Home from './Home'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Ani's Tech Blog</h2>
      </header>
      <BrowserRouter>
        <div>
          <Route component={Home} path='/' exact />
          <Route component={Post} path='/:slug' />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
