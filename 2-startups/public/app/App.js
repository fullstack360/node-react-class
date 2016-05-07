import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StartupList from './components/StartupList'

class App extends Component {

	render(){

		return (
			<div>
				Hello REACT!
				<StartupList />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))