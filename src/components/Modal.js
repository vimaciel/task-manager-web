import React, { Component, PureComponent, Fragment } from 'react';

class Modal extends PureComponent {
    render() {
        const { children, show } = this.props

        return (
            <Fragment>
                <div className={`background-opacity ${show && 'show'}`} />
                <div className={`modal ${show && 'show'}`}>
                    {children}
                </div>
            </Fragment>
        )
    }
}

export default Modal