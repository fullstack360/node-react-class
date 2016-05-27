import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Communities from './components/Communities'
import store from './stores/store'
import { Provider } from 'react-redux'

class App extends Component {

	render(){
		return (
			<div>
				HELLO REACT!
				<Communities />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('app')
)