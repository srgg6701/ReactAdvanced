import React from 'react'
import Textual from '../Context/Textual'
// import PropTypes from 'prop-types'
import FieldsetHOCPure from '../../HOCs/FieldsetHOCPure'
//<ChildComponent {...props}>{ children }</ChildComponent>
// exports component, wrappet in HOC
const FieldsetHOCPureCalled = FieldsetHOCPure(Textual, {
    name: "Strange fruit",
    legend: 'Textual content!'
}, <p>Yo! Children here.</p>);
export {FieldsetHOCPureCalled}