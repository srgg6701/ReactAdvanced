import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'

import FieldsetHOCPure from '../../HOCs/FieldsetHOCPure'
//import Fieldset from '../Fieldset';
//<ChildComponent {...props}>{ children }</ChildComponent>
class Textual extends Component {
    render() {
        return (
            <Fragment>
                <div>My name is { this.props.name }</div>
                {this.props.children}
            </Fragment>
        )
    }
}

export default FieldsetHOCPure(Textual, {name: "Strange fruit"}, <p>Yo! Children here.</p>);

