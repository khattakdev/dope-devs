import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './Pages/Home'
import Team from './Pages/Team'
import Events from './pages/Events'
import './App.css'
function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/events" element={<Events/>}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
