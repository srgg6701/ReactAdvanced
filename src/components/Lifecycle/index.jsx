import React, { Component } from 'react'
import Fieldset from '../Fieldset/'

function output(bgcolor, text1, text2, ob = null) {
    console.groupCollapsed(`%c${text1} %c ${text2}`, `background-color: ${bgcolor}`, 'background-color: transparent');
    if (ob) console.log(ob);
    console.groupEnd();
}

const wrCss = {
    display: 'flex',
    /* flexDirection: 'column', */
    float: 'right',
    marginLeft: 40
},
    formCss = {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 40,
        marginTop: 20
    }

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
    /* OBSOLETE!
    componentWillMount() {
        console.log('componentWillMount');
    } */

    /* static getDerivedStateFromProps(props, state){
        output('pink', '2', 'getDerivedStateFromProps: props, state =>', {props, state} );
        return null;
    } */

    componentDidMount() {
        output('lightgreen', '3', 'componentDidMount');
    }

    /*  OBSOLETE!
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps, got nextProps => ', nextProps);
    } */

    /* shouldComponentUpdate(nextProps, nextState) {
        output('lime', '4', 'shouldComponentUpdate: nextProps, nextState =>', nextProps, nextState);
    } */

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
            state_val: this.refs.state_val.value
        });
        this.setState({
            [this.refs.state_prop.value]: this.refs.state_val.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div style={wrCss}>
                    <section>
                        <TableCommon contents={this.outputState()} />
                        <TablePure contents='Fake contents for Pure component' />
                    </section>
                    <section style={formCss}>
                        <input type="text" ref="state_prop" />
                        <input type="text" ref="state_val" />
                        <button onClick={this.changeState}>Add</button>
                    </section>
                </div>
                <h4>State here</h4>
                <a href="javascript:void(0)" onClick={() => this.setState({
                    flds: ! this.state.flds
                })}>{
                    this.state.flds ? 'Hide rest' : 'Show rest'
                }</a>
                {this.state.flds && <Flds>
                    <section>Not quite sure, btw, what's going to be here...</section>
                </Flds>}
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

class TableCommon extends React.Component {
    componentWillReceiveProps(nextProps) {
        output('rgb(100, 255, 255)', '[TableCommon]', 'componentWillReceiveProps, nextProps =>', nextProps);
    }
    render() {
        console.log('%c=| TableCommon is updated |=', 'color:violet');
        return (
            <table><tbody>{this.props.contents}</tbody></table>
        );
    }
}

class TablePure extends React.PureComponent {
    componentWillReceiveProps(nextProps) {
        output('rgb(255, 255, 100)', '[TablePure]', 'componentWillReceiveProps, nextProps =>', nextProps);
    }
    render() {
        console.log('%c=| TablePure is updated |=', 'color:rebeccapurple');
        return this.props.contents
    }
}

class Flds extends React.Component {

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
                <Fieldset ref="secondBlock" css={{ color: 'blue' }}>
                    Fieldset ref here:
                    <Fieldset>secondBlock</Fieldset>
                </Fieldset>
            </React.Fragment>
        )
    }
} 