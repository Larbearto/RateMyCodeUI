import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import FeedbackForm from './component/FeedbackForm'
import FeedbackList from './component/FeedbackList'
import FeedbackStats from './component/FeedbackStats'
import AboutIconLink from './component/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
