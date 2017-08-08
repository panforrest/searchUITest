import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components'

class App extends Component {
  render(){
	return(
	  <div>
	    THIS IS REACT
	    <Home />
	  </div>
	)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))