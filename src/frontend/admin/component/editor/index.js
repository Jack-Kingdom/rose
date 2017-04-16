/**
 * Created by Jack on 4/13/2017.
 */

import React from 'react';
import Editor from 'react-medium-editor'

class MyEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Fusce dapibus, tellus ac cursus commodo',
        };

        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount() {
        this.refs.editor.focus();
    }

    handleChange(text, medium) {
        this.state.text=text;
        console.log(this.state.text)
    }

    render() {
        return (
            <div className="app">
                <h1>react-medium-editor</h1>
                <h3>Html content</h3>
                <div>{this.state.text}</div>

                <h3>Editor #1 (&lt;pre&gt; tag)</h3>
                <Editor
                    tag="pre"
                    text={this.state.text}
                    onChange={this.handleChange}
                    options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
                />
                <h3>Editor #2</h3>
                <Editor
                    text={this.state.text}
                    onChange={this.handleChange}
                    options={{toolbar: {buttons: ['bold', 'italic', 'underline','justifyLeft','justifyCenter','justifyRight','html']}}}
                />
            </div>
        );
    }
}

export default MyEditor;
