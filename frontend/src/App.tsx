import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FeedPage from './pages/FeedPage'
import ProfilePage from './pages/ProfilePage'
import MessagesPage from './pages/MessagesPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<FeedPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/messages' element={<MessagesPage />} />
    </Routes>
  )
}

export default App
