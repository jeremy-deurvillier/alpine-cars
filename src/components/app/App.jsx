import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import { Start as StartConfigure } from '../configure/Start'
import NotFound from '../not-found/NotFound'
import Layout from '../configure/Layout'
import Option from '../configure/Option'
import './reset.css'

function App() {
  return (<>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/configure' element={<StartConfigure />} />
        <Route path='/configure/:name' element={<Layout />}>
          <Route path='/configure/:name/:option' element={<Option />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </>)
}

export default App