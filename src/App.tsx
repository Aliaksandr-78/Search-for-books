import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookDetailPage from './pages/BookDetailPage'
import routes from './api/routes'
import React from 'react'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
        </Routes>
      </Router>
    </>
  )
}
