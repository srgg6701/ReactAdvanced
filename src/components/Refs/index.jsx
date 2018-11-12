import React, { PureComponent } from 'react'
import Transparent from '../Durty/'
import Fieldset from '../Fieldset/'

export default class Refs extends PureComponent {
    firsCell = React.createRef();
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        //this.transp = React.createRef();
        this.block2 = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        console.log('%cConstructor is called, this=>', 'background: lightblue', this);
    }

    focusTextInput() {
        this.textInput.current.value = 'Yo, man!';
        this.textInput.current.focus();
        console.log('%focusTextInput, this=>', 'background: lightgreen', this);
    }

    componentDidMount() {
        console.log('%cDid mount', 'background: lightskyblue', this);
        // this._input.focus();
    }

    render() {

        return (
            <React.Fragment>
                <Fieldset legend="Instance.refs.&lt;property&gt;">
                    <p>It passes <code className="inline">ref</code> as a literal</p>
                    <pre>
                        <code>{
                            `<tag ref="secondBlock"/>`
                        }</code>
                    </pre>
                    <div ref="secondBlock"><b>Second block</b> here. It is accessible in constructor.</div>
                </Fieldset>
                <Fieldset legend="Instance.&lt;property&gt;">
                    <p>It is created outside constructor and needs to use React.createRef</p>
                    <pre>
                        <code>{`class Refs extends PureComponent{`}</code>
                        <code>
                            <section>{`
    firsCell = React.createRef();`
                            }</section>
                        </code>
                        <code>{`
    constructor(props) {`
                        }
                        </code>
                    </pre>
                    <input type="text" ref={this.firsCell} />
                </Fieldset>
                <Fieldset legend="this.&lt;React_class.&lt;property&gt;&gt;">
                    <div ref={el => this.block = el}>Block here ref is a function</div>
                </Fieldset>
                <div ref={this.block2}>Block here, ref is created as an instance property</div>
                <input type="text" ref={this.textInput} />
                <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
                <Transparent ref={this.transp}><p>They cannot see me as a ref...</p></Transparent>
                <Transparent ref={trnsp => this.transportation = trnsp}><p>I am totally engaged in learning.</p></Transparent>
            </React.Fragment>
        );
    }
}
