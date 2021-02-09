import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Post from './Post'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '75vh',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <div className={classes.container}>
          <Route component={Home} path={['/', '/home']} exact />
          <Route component={Post} path='/:slug' />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
