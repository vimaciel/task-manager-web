import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2>Name of screen</h2>
                <button className="btn-primary">
                    + New task
                </button>
            </div>
        )
    }
}
