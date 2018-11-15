import React, { Component, Fragment } from 'react'
//import PropTypes from 'prop-types'
//import Fieldset from '../Fieldset';
//<ChildComponent {...props}>{ children }</ChildComponent>
export default class Textual extends Component {
    render() {
        return (
            <Fragment>
                <div>My name is { this.props.name }</div>
                {this.props.children}
            </Fragment>
        )
    }
}