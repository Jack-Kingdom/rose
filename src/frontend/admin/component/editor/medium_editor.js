/**
 * Created by Jack on 4/13/2017.
 */

import React from 'react';
import {Editor, createEditorState} from 'medium-draft';

class MediumDraftEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: createEditorState(),
        };

        this.onChange = (editorState) => {
            this.setState({editorState});
        };
    }

    componentDidMount() {
        this.refs.editor.focus();
    }

    render() {
        return (
            <Editor
                ref="editor"
                editorState={this.state.editorState}
                onChange={this.onChange} />
        );
    }
}

export default MediumDraftEditor;
