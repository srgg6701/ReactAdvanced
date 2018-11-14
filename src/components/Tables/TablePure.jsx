// Notice, that we don't need to import React itself!
// This is the case for the PureComponent but not for the Component and not for functional Component!
import { PureComponent } from 'react'
import output from '../../app-components/utils'

export default class TablePure extends PureComponent {
    state = {
        mood: 'Strange'
    }
    static getDerivedStateFromProps(props, state){
        output('goldenrod', '01', 'getDerivedStateFromProps: props, state =>', {props, state} );
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        output('lime', '02', 'componentDidUpdate: props, state =>', {prevProps, prevState, currentProps: this.props, currentState:this.state, snapshot} );
    }
    render() {
        console.log('%c=| TablePure is updated |=', 'color:rebeccapurple');
        return this.props.contents
    }
    
    /* componentWillReceiveProps(nextProps) {
        output('rgb(255, 255, 100)', '[TablePure]', 'componentWillReceiveProps, nextProps =>', nextProps);
    } */
}