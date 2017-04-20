/**
 * Created by Jack on 4/13/2017.
 */

import React from 'react';
import MediumEditor from 'medium-editor'

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Fusce dapibus, tellus ac cursus commodo',
        };
    }

    componentDidMount() {
        let editor = new MediumEditor(this.refs.editor);
    }

    render() {
        return (
            <div ref="editor" />
        );
    }
}

export default Editor;
