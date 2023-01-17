import { useState } from 'react'
import './App.css'

import { Article, Brand, CTA, Feature, Navbar } from './components'
import {Blog, Header, Features, Footer, Possibility, WhatGPT3} from './container'
function App() {
  
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
