import React, { PureComponent } from 'react'

export default class Fieldset extends PureComponent {
    render() {
        return (
            <fieldset style={this.props.css || { color: this.props.color }}>
                <legend>{this.props.legend || 'No legend so far :('}</legend>
                {this.props.children}
            </fieldset>
        )
    }
}
