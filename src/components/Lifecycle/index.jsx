import React, { Component/* , PureComponent */, Fragment } from 'react'
import output, { wrCss, formCss } from '../../app-components/utils'
import FieldsetReact from '../Fieldset/'
import HOCCommon from '../../HOCs/FieldsetHOCCommon'
import HOCPure from '../../HOCs/FieldsetHOCPure'
import TableCommon from '../Tables/TableCommon'
import TablePure from '../Tables/TablePure'

// https://learn-reactjs.ru/core/refs-and-the-dom
export default class Lifecycle extends Component {
    
    tableData = {
        address: 'Unknown',
        name: 'Nameless',
        state_val: 'No any state value yet...',
        pureContents: ''
    }
    state = {
        html: <tr><td>Empty...</td></tr> 
    }
    constructor(props) {
        super(props)
        // this.name = "LifecycleComponent";
        this.FieldsetHOCCommon = HOCCommon(TableCommon, {
            word: this.tableData.state_val/* , contents: this.outputState() */
        })
        this.FieldsetHOCPure = HOCPure(TablePure, {
            legend: 'Puritan here',
            contents: this.tableData.pureContents ||'Fake contents for Pure component'
        })
        //this.outputState();
        output('lightskyblue', '1', 'constructor', this);
    }
    /* static getDerivedStateFromProps(props, state){
        output('pink', '2', 'getDerivedStateFromProps: props, state =>', {props, state} );
        return null;
    } */
    componentDidMount() {
        output('lightgreen', '3', 'componentDidMount');
        this.changeState(true);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        output('#ccc', '5', 'componentDidUpdate: prevProps, prevState, snapshot =>', { prevProps, prevState, snapshot });
    }
    /* componentWillUnmount() {
        output('orange', '6', 'componentWillUnmount');
    } */
    outputState = () => {
        //this.stateHTML = [];
        output('orange', '6', 'outputState');
        return Object.entries(this.tableData).map((entry, index) => (
                <tr key={index}>
                    <td>{entry[0]}</td>
                    <td>{entry[1]}</td>
                </tr>)
        );
    }
    changeState = init => {
        if (init!==true) {
            // add new property to tableData
            this.tableData[this.refs.state_prop.value] = this.refs.state_val.value;
            // change value of pureContents
            this.tableData.pureContents = this.refs.state_contents.value;
            // setState[, render]
        }
        this.setState(prevState =>({
            html: this.outputState()
        }), () => output('yellow', '7', 'changeState'));
        /* this.setState(prevState => ({
            [this.refs.state_prop.value]: this.refs.state_val.value,
            pureContents: this.refs.state_contents.value
        }), () => {
            this.outputState();
        }); */
    }

    render() {
        console.log('%cRendered!', 'color:orangered', this);
        return (
            <Fragment>
                <div className="float-right display-flex" style={wrCss}>
                    <section>
                        {/* 
                            see child component passed to HOC;
                            notice, that props for it are passed via HOC argument
                        */}
                        <this.FieldsetHOCCommon contents={this.state.html} legend="Common. Current parent state" />
                        <br/>
                        <this.FieldsetHOCPure />
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