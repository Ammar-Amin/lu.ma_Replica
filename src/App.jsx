import Layout from "./components/Layout"
import City from "./pages/City"
import ExploreEvents from "./pages/ExploreEvents"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import News from "./pages/News"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="discover" element={<ExploreEvents />} />
          <Route path="city" element={<City />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
