import React, { Component } from 'react'
import "./BackDrop.css"
export default class BackDrop extends Component {
    render() {
        return (
            <div className="backdrop" onClick={this.click}>
                
            </div>
        )
    }
}
