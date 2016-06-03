import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import store from './stores/store'
import { Provider } from 'react-redux'

class App extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			page: 'home'
		}

	}

	componentWillMount(){
		var pathname = window.location.pathname
		var path = pathname.replace('/', ''); // http://localhost:3000/

		var page = 'home'
		if (path.length > 0){
			var parts = path.split('/')
			page = parts[0]
		}

		this.setState({
			page: page
		})
	}

	render(){
		return (
			<Main page={this.state.page} />
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('app')
)