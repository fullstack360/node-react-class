import React, { Component } from 'react'

class Nav extends Component {

	render(){
		return (
	        <header id="header" className="transparent-header dark">

	            <div id="header-wrap">
	                <div className="container clearfix">
	                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>

	                    <div id="logo">
	                        <a href="/" className="standard-logo" data-dark-logo="/images/logo-dark.png">
	                        	<img src="/images/logo.png" alt="Canvas Logo" />
	                        </a>
	                        <a href="/" className="retina-logo" data-dark-logo="/images/logo-dark@2x.png">
	                        	<img src="/images/logo@2x.png" alt="Canvas Logo" />
	                        </a>
	                    </div>

	                    <nav id="primary-menu">
	                        <ul>
	                            <li><a href="/"><div>Home</div></a></li>
	                            <li><a href="/register"><div>Register</div></a></li>
	                            <li><a href="/"><div>Home</div></a></li>
	                        </ul>
	                    </nav>
	                </div>
	            </div>
	        </header>

		)

	}
}

export default Nav