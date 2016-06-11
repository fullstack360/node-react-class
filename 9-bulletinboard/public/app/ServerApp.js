import React, { Component } from 'react'
import Main from './components/Main'
import store from './stores/store'
import { Provider } from 'react-redux'


class App extends Component {

	render(){
		return (
			<Provider store={store}>
				<Main page={this.props.page} slug={this.props.slug} />
			</Provider>
		)
	}
}

export default App