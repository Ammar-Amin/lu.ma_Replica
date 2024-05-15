import Layout from "./components/Layout"
import ExploreEvents from "./pages/ExploreEvents"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="discover" element={<ExploreEvents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
