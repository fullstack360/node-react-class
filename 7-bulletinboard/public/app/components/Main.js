import React, { Component } from 'react'
import Communities from '../components/Communities'
import Register from '../components/layout/Register'

class Main extends Component {

	componentDidMount(){
		console.log('MAIN: '+this.props.page)
	}

	render(){
		var content = null
		var page = this.props.page
		if (page == 'home')
			content = <Communities />

		if (page == 'register')
			content = <Register />


		return (
			<div>
				{ content }
			</div>
		)
	}
}

export default Main
