import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Store from './Pages/Store'
import Details from './Pages/Details'
import LoginSingIn from './Pages/LoginSingIn'
import Missing from './Pages/Missing'
import LayOut from './Pages/LayOut'
import DataProvider from './contexts/DataProvider'

export default function App() {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
           <Route index element={<Home />}/>
           <Route path="about" element={<About />}/>
           <Route path="contact" element={<Contact />}/>
           <Route path="login" element={<LoginSingIn />}/>
           <Route path="store">
             <Route index element={<Store />}/>
             <Route path="details/:id" element={<Details />}/>
           </Route>
           <Route path="*" element={<Missing />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </DataProvider>
  )
}