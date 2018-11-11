import React, { PureComponent } from 'react'

export default class Puritan extends PureComponent {
    constructor(props){
        super(props);
        this.refCell = React.createRef();
        this.updateRefs = this.updateRefs.bind(this);
        console.log(this);
    }
    updateRefs(){
        console.log('updateRefs, this', this);
    }
    render() {
        return (
            <React.Fragment>
                <h4>Pure component</h4>
                <p>
                    Yes, I am a puritan. And wnat?
                </p>
                <h5>Let's check how it works!</h5>
                <input type="text" onChange={this.updateRefs} ref={ this.refCell } />
            </React.Fragment>
        )
    }
}
