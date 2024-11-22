import React from "react"
import "./index.css"
import Navbar from "./components/01-Navbar/Navbar"
import Body from "./components/02-Body/Body"
import Features from "./components/03-Features/Features"
import Sisyphus from "./components/04-Sisyphus/Sisyphus"
import More from "./components/05-MoreFeatures/More"
import Questions from "./components/06-Questions/Questions"
import Blog from "./components/07-Blog/Blog"
import Start from "./components/08-Start/Start"
import Footer from "./components/09-Footer/Footer"

function App() {



  return (
    <div className="app p-0 m-0 box-border h-[100vh] w-[100%]">
      <Navbar/>
      <Body/>
      <Features/>
      <Sisyphus/>
      <More/>
      <Questions/>
      <Blog/>
      <Start/>
      <Footer/>
    </div>
  )
}

export default App
