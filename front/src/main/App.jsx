import React from 'react'

import Rotas from './rotas'
import Navbar from '../components/navbar'

import '../../node_modules/toastr/build/toastr.min.js'

import '../../node_modules/bootswatch/dist/minty/bootstrap.css'
import '../custom.css'
import '../../node_modules/toastr/build/toastr.min.css'

class App extends React.Component{
  render(){
    return (
      <>
      <Navbar />
    <div className="container">
      <Rotas />
    </div>
    </>
    )
  }
}

export default App
