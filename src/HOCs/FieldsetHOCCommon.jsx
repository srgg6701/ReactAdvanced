import React, { Component } from 'react'
// exports HOC function
const FieldsetHOCCommon = (ChildComponent, props, children) => {
    class Fieldset extends Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError(error) {
            // Update state so the next render will show the fallback UI.
            return { hasError: true };
        }

        render() {
            console.log('%cFieldsetHOCCommon render...', 'color: violet', this, {props, children});
            if (this.state.hasError) {
                // You can render any custom fallback UI
                return <h1>Something went wrong.</h1>;
            }
            return (
                <fieldset style={this.props.css || { color: this.props.color }}>
                    <legend>{props.legend || this.props.legend || 'No legend so far :('}</legend>
                    <ChildComponent {...props}>{children}</ChildComponent>
                </fieldset>
            )
        }
    }
    return Fieldset;
}

export default FieldsetHOCCommon