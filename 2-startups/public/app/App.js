import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StartupList from './components/StartupList'
import ProfileList from './components/ProfileList'

class App extends Component {

	render(){

		return (
			<div>
				Hello REACT!
				<StartupList />
				<ProfileList />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))