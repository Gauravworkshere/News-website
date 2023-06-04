import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Newsiteam from './components/Newsiteam'

import {BrowserRouter,Route,Routes} from "react-router-dom"



export default class App extends Component {
  render() {
    return (
      <>
 


     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route exact path="/" element={<Newsiteam key="business" category="business"/>}></Route> 
     <Route exact path="/business" element={<Newsiteam key="business" category="business"/>}></Route> 
     <Route exact path="/health" element={<Newsiteam key="health" category="health"/>}></Route> 
     <Route exact path="/science" element={<Newsiteam key="science" category="science"/>}></Route> 
     <Route exact path="/technology" element={<Newsiteam key="technology" category="technology"/>}></Route> 



     </Routes>
     
     </BrowserRouter>
  
     </>
   
    )
  }
}
