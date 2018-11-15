import React, { Component/* , PureComponent */, Fragment } from 'react'
import output, { wrCss, formCss } from '../../app-components/utils'
import FieldsetReact from '../Fieldset/'
import TableCommon from '../Tables/TableCommon'
import TablePure from '../Tables/TablePure'

// https://learn-reactjs.ru/core/refs-and-the-dom
export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: 'Unknown',
            name: 'Nameless'
        }
        this.name = "Tarzan";
        output('lightskyblue', '1', 'constructor');
    }

    stateHTML = []
    
    /* static getDerivedStateFromProps(props, state){
        output('pink', '2', 'getDerivedStateFromProps: props, state =>', {props, state} );
        return null;
    } */

    componentDidMount() {
        output('lightgreen', '3', 'componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        output('#ccc', '5', 'componentDidUpdate: prevProps, prevState, snapshot =>', { prevProps, prevState, snapshot });
    }

    componentWillUnmount() {
        output('orange', '6', 'componentWillUnmount');
    }

    outputState = () => {
        this.stateHTML = [];
        Object.entries(this.state).forEach((entry, index) => {
            this.stateHTML.push(
                <tr key={index}>
                    <td>{entry[0]}</td>
                    <td>{entry[1]}</td>
                </tr>)
        });
        return this.stateHTML;
    }

    changeState = () => {
        output('yellow', '7', 'changeState', {
            this: this,
            state_prop: this.refs.state_prop.value,
            state_val: this.refs.state_val.value,
            state_contents: this.refs.state_contents
        });
        this.setState({
            [this.refs.state_prop.value]: this.refs.state_val.value,
            pureContents: this.refs.state_contents.value
        });
    }

    render() {
        console.log('%cRendered!', 'color:orangered');
        return (
            <Fragment>
                <div style={wrCss}>
                    <section>
                        <TableCommon word={this.state.state_val} contents={this.outputState()} />
                        <TablePure contents={ this.state.pureContents ||'Fake contents for Pure component' } />
                    </section>
                    <section style={formCss}>
                        <input type="text" ref="state_prop" />
                        <input type="text" ref="state_val" />
                        <input type="text" ref="state_contents" />
                        <button onClick={this.changeState}>Add</button>
                    </section>
                </div>
                <h4>State here</h4>
                <button onClick={() => this.setState({
                    flds: ! this.state.flds
                })}>{
                    this.state.flds ? 'Hide rest' : 'Show rest'
                }</button>
                {this.state.flds && <Fieldset>
                    <section>Not quite sure, btw, what's going to be here...</section>
                </Fieldset>}
            </Fragment>
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
class Inner extends Component {
    render() {
        return (
            <CustomTextInput inputRef={el => this.inputElement = el}
            />
        );
    }
}

export { Inner }

class Fieldset extends Component {

    render() {
        return (
            <Fragment>
                <hr className="separator" />
                <fieldset style={{ backgroundColor: '#eee' }}>
                    <legend>I am small and awesome</legend>
                    <p>Can you see me?</p>
                    <fieldset style={{ backgroundColor: '#fff' }}>
                        <legend>I have children:</legend>
                        {this.props.children}
                    </fieldset>
                </fieldset>
                <FieldsetReact ref="secondBlock" css={{ color: 'blue' }}>
                    Fieldset ref here:
                    <FieldsetReact>secondBlock</FieldsetReact>
                </FieldsetReact>
            </Fragment>
        )
    }
} 