import React, { Component } from 'react'

export default class Durty extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.transp = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.value = 'Yo, man!';
        this.textInput.current.focus();
        console.log('check this=>', { this:this, value: this.textInput.current.value, transp: this.transp });
    }

    render() {
        
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
                <Transparent ref={this.transp}></Transparent>
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

    render(){
        return (
            <fieldset>
                <legend>I am small and awesome</legend>
                <p>Can you see me?</p>
                <p>I have children: {this.props.children}</p>
            </fieldset>
        )
    }
}

