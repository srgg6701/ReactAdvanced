import React, { Component } from 'react'
import Fieldset from '../Fieldset/'
// https://learn-reactjs.ru/core/refs-and-the-dom
export default class Durty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: 'Unknown'
        }
        this.name = "Tarzan";
    }
    render() {
        return (
            <React.Fragment>
                <hr className="separator" />
                <fieldset style={{ backgroundColor: '#eee' }}>
                    <legend>I am small and awesome</legend>
                    <p>Can you see me?</p>
                    <fieldset style={{ backgroundColor: '#fff' }}>
                        <legend>I have children:</legend>
                        {this.props.children}
                    </fieldset>
                </fieldset>
                <Fieldset ref="secondBlock" css={{color:'blue'}}>
                    Fieldset ref here: 
                    <Fieldset>secondBlock</Fieldset>
                </Fieldset>
            </React.Fragment>
        )
    }
}
function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}
class Inner extends React.Component {
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el}
            />
        );
    }
}

export { Inner }

