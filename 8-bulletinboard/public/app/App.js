import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import store from './stores/store'
import { Provider } from 'react-redux'

class App extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			page: 'home',
			slug: null
		}

	}

	componentWillMount(){
		var pathname = window.location.pathname
		var path = pathname.replace('/', ''); // http://localhost:3000/

		var page = 'home'
		var slug = null
		if (path.length > 0){
			var parts = path.split('/')
			page = parts[0]
			if (parts.length > 1)
				slug = parts[1]
		}

		this.setState({
			page: page,
			slug: slug
		})
	}

	render(){
		return (
			<Main page={this.state.page} slug={this.state.slug} />
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('app')
)