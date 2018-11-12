import React, { Component } from 'react'
import Deprecated from '../Deprecated/'
// https://learn-reactjs.ru/core/refs-and-the-dom
export default class Durty extends Component {
    firsCell = React.createRef();
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.transp = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.value = 'Yo, man!';
        this.textInput.current.focus();
        console.log('check this=>', {
            this: this,
            value: this.textInput.current.value,
            transp: this.transp,
            firsCell: this.firsCell
        });
    }

    componentDidMount() {
        console.log('block', { block:this.block, this: this });
        // this._input.focus();
    }

    render() {

        return (
            <div>
                <input type="text" ref={this.firsCell} />
                <div ref={el => this.block = el}>Block here</div>
                <Deprecated ref="secondBlock" css={{color:'blue'}}>
                    Deprecated ref here: 
                    <Deprecated>secondBlock</Deprecated>
                </Deprecated>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
                <Transparent ref={this.transp}>
                    <p>I am totally engaged in learning.</p>
                </Transparent>
            </div>
        );
    }
}
class Transparent extends Component {
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
class Parent extends React.Component {
    render() {
        return (
            <CustomTextInput
                inputRef={el => this.inputElement = el}
            />
        );
    }
}

export { Parent }

