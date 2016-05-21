import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import StartupList from './components/StartupList'
import ProfileList from './components/ProfileList'
import store from './stores/store'
import { Provider } from 'react-redux'



class App extends Component {

	render(){
		return (
			<div>
				HELLO REACT!
				<StartupList />
				<ProfileList />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>	,
	document.getElementById('app')
)












