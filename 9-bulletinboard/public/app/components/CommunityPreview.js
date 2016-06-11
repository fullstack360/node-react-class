import React, { Component } from 'react'

class CommunityPreview extends Component {

	render(){
		return (
            <div className="entry clearfix">
                <div className="entry-image hidden-sm">
                    <a href={'/community/'+this.props.community.slug}>
                        <img src="/images/events/thumbs/1.jpg" alt="tenetur" />
                    </a>
                </div>
                <div className="entry-c">
                    <div className="entry-title">
                        <h2>
                        	<a href={'/community/'+this.props.community.slug}>{this.props.community.name}</a>
                        </h2>
                    </div>
                    <ul className="entry-meta clearfix">
                        <li><a href="#"><i className="icon-time"></i> {this.props.community.address}</a></li>
                        <li><a href="#"><i className="icon-map-marker2"></i> {this.props.community.city}</a></li>
                    </ul>
                    <hr style={{borderTop:'1px solid #ddd'}} />
                    <div className="entry-content">
                        <a href={'/community/'+this.props.community.slug} className="btn btn-danger">Visit</a>
                    </div>
                </div>
            </div>

		)

	}
}

export default CommunityPreview