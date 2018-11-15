import React, { Component, Fragment } from 'react'
import Textual from '../Context/Textual'
// import PropTypes from 'prop-types'
import FieldsetHOCPure from '../../HOCs/FieldsetHOCPure'
//<ChildComponent {...props}>{ children }</ChildComponent>
// exports component, wrappet in HOC
export default FieldsetHOCPure(Textual, {name: "Strange fruit"}, <p>Yo! Children here.</p>);