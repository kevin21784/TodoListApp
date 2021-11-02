import MainSection from './components/MainSection'
import Footer from './components/Footer'
import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="mt-10 border-2 border-blue-400 m-auto max-w-lg">
      <div className="">
      </div>
      <MainSection />
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  )
}

export default App;
