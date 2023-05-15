import React, { Component } from 'react'

export default class Item extends Component {
    
    render() {
       
        let {title,description}=this.props;
        return (
            <div>
                <div className="card my-1" Style="width: 13rem;">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                </div>
            </div>
        )
    }
}
