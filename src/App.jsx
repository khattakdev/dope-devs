import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Team from './pages/Team'
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
