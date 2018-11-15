// another approach to import object
import * as React from 'react'
//import output from '../../app-components/utils'

export default class TableCommon extends React.Component {
    state = {
        mood: 'Strange'
    }
    /* static getDerivedStateFromProps(props, state){
        output('goldenrod', '01', 'getDerivedStateFromProps: props, state =>', {props, state} );
        return null;
    } */
    /* shouldComponentUpdate(nextProps, nextState) {
        return false;
    } */
    /* componentDidUpdate(prevProps, prevState, snapshot){
        output('lime', '02', 'componentDidUpdate: props, state =>', {prevProps, prevState, currentProps: this.props, currentState:this.state, snapshot} );
    } */
    render() {
        console.log('%c=| TableCommon is updated |=%c this =>', 'color:violet', 'color: black', this);
        return (
            <table><tbody>{this.props.contents}</tbody></table>
        );
    }
}

