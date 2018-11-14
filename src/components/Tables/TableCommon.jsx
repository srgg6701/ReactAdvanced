// another approach to import object
import * as React from 'react'
//import output from '../../app-components/utils'

export default class TableCommon extends React.Component {
    state = {
        mood: 'Strange'
    }
    /* shouldComponentUpdate(nextProps, nextState) {
        return false;
    } */
    /* static getDerivedStateFromProps(props, state){
        output('goldenrod', '01', 'getDerivedStateFromProps: props, state =>', {props, state} );
        return null;
    } */
    /* componentDidUpdate(prevProps, prevState, snapshot){
        output('lime', '02', 'componentDidUpdate: props, state =>', {prevProps, prevState, currentProps: this.props, currentState:this.state, snapshot} );
    } */
    render() {
        console.log('%c=| TableCommon is updated |=', 'color:violet');
        return (
            <table><tbody>{this.props.contents}</tbody></table>
        );
    }
    /* componentWillReceiveProps(nextProps) {
        output('rgb(100, 255, 255)', '[TableCommon]', 'componentWillReceiveProps, nextProps =>', nextProps);
    } */

}

