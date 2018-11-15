import React, { Component/* , PureComponent */, Fragment } from 'react'
import output, { wrCss, formCss } from '../../app-components/utils'
import FieldsetReact from '../Fieldset/'
import HOCCommon from '../../HOCs/FieldsetHOCCommon'
import HOCPure from '../../HOCs/FieldsetHOCPure'
import TableCommon from '../Tables/TableCommon'
import TablePure from '../Tables/TablePure'

// https://learn-reactjs.ru/core/refs-and-the-dom
export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: 'Unknown',
            name: 'Nameless',
            state_val: 'No any state value yet...' 
        }
        // this.name = "LifecycleComponent";
        // output('lightskyblue', '1', 'constructor');
        this.FieldsetHOCCommon = HOCCommon(TableCommon, {
            word: this.state.state_val,
            // passes current props
            contents: this.outputState()
        })
        this.FieldsetHOCPure = HOCPure(TablePure, {
            legend: 'Puritan here',
            contents: this.state.pureContents ||'Fake contents for Pure component'
        })
        /*  it is useless re-define a component in componentDidMount as it
            is not going to renender until state on prop is changed
        */
        // this.FieldsetHOC2 = () => <section>Nothing yet</section>;
    }
    stateHTML = []
    /* static getDerivedStateFromProps(props, state){
        output('pink', '2', 'getDerivedStateFromProps: props, state =>', {props, state} );
        return null;
    } */
    componentDidMount() {
        output('lightgreen', '3', 'componentDidMount');
        // this won't work as was intended. See note in constructor 
        /* this.FieldsetHOC2 = HOCCommon(TableCommon, {
            contents: this.state.pureContents ||'Fake contents for a canny component'
        }); */
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
                <div className="float-right display-flex" style={wrCss}>
                    <section>
                        {/* 
                            see child component passed to HOC;
                            notice, that props for it are passed via HOC argument
                        */}
                        <this.FieldsetHOCCommon legend="Common. Current parent state" />
                        <br/>
                        <this.FieldsetHOCPure />
                        {this.FieldsetHOC2 && <this.FieldsetHOC2 />}
                        {/* <TableCommon word={this.state.state_val} contents={this.outputState()} />
                            <TablePure contents={ this.state.pureContents ||'Fake contents for Pure component' } /> 
                        */}
                    </section>
                    {/* Block for changing state */}
                    <section className="display-flex" style={formCss}>
                        <input type="text" ref="state_prop" placeholder="new state name" />
                        <input type="text" ref="state_val" placeholder="new state value" />
                        <input type="text" ref="state_contents" placeholder="state.PureContents value" />
                        <button onClick={this.changeState}>Add</button>
                    </section>
                </div>
                <div className="float-left">
                    <h4>State here</h4>
                    <button onClick={() => this.setState({
                        flds: !this.state.flds
                    })}>{
                            this.state.flds ? 'Hide rest' : 'Show rest'
                        }</button>
                </div>
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