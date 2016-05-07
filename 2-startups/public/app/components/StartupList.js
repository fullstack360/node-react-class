import React, { Component } from 'react'
import ListItem from '../components/ListItem'

class StartupList extends Component {

	render(){
		return (
			<ol>
				<ListItem startup="Lyft" />
				<ListItem startup="Uber" />
				<ListItem startup="Blue Apron" />
			</ol>
		)
	}
}

export default StartupList