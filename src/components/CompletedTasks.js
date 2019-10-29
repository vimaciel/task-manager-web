import React, { PureComponent, Fragment } from 'react'
import Header from './Header'

export default class CompletedTasks extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header title="Completed Tasks"/>
                <span>Completed Tasks</span>
            </Fragment>
        )
    }
}
