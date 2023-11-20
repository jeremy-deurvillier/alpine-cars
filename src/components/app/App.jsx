import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import './App.css'

function App() {
  return (<>
    <Router>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  </>)
}

export default App