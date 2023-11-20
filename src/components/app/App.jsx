import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import { Start as StartConfigure } from '../configure/Start'
import NotFound from '../not-found/NotFound'
import './App.css'

function App() {
  return (<>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/configure' element={<StartConfigure />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </>)
}

export default App