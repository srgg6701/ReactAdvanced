import React, { Component } from 'react'
// exports HOC function
const FieldsetHOCPure = (ChildComponent, props, children) => {
    class Fieldset extends Component {
        render() {
            return (
                <fieldset style={this.props.css || { color: this.props.color }}>
                    <legend>{this.props.legend || 'No legend so far :('}</legend>
                    <ChildComponent {...props}>{children}</ChildComponent>
                </fieldset>
            )
        }
    }
    return Fieldset;
}

export { FieldsetHOCPure };