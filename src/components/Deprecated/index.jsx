import React, { PureComponent } from 'react'

export default class Deprecated extends PureComponent {
    componentDidMount() {
        console.log('this, Deprecated=>', this);
    }
    render() {
        return (
            <div style={this.props.css || { color: '#f00' }}>{
                this.props.children
            }</div>
        )
    }
}
