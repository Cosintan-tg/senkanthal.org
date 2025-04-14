import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
// import About from './pages/about/About'
// import Contact from './pages/contact/Contact'
// import Crypto from './pages/crypto/Crypto'
import Error404 from './pages/errors/Error404'
import Error from './pages/errors/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route caseSensitive={false} path="/*" element={<Error404 />} />

        <Route caseSensitive={false} path="/about" element={<Error code="503" description="Site is down for maintenance." />} />
        <Route caseSensitive={false} path="/contact" element={<Error code="503" description="Site is down for maintenance." />} />
        <Route caseSensitive={false} path="/crypto" element={<Error code="503" description="Site is down for maintenance." />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
