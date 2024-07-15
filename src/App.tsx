import { useState } from 'react'
import './App.css'
import MyBlogs from './pages/MyBlogs'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Navigation from './components/Navigation'
import BlogView from './pages/BlogView'

function App() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <>
      <Router>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Blogs Platform</Typography>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <Navigation />
          </div>
        </Drawer>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myBlogs" element={<MyBlogs />} />
            <Route path="/blog" element={<BlogView />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
