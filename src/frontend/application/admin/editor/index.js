/**
 * Created by Jack on 4/13/2017.
 */

import React from 'react';
import MediumEditor from 'medium-editor'
import Radium from 'radium'
// import Katex from 'katex'
import styles from '../../styles'

@Radium
class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title || "Article's title here",
            content: props.content || "Article's content here",
        };
    }

    componentDidMount() {
        let editor = new MediumEditor(this.refs.editor);
    }

    render() {
        return (
            <div className="editor-container">
                <input id="article-title" style={[styles.editor.base, styles.editor.title]} value={this.state.title}/>
                <div ref="editor" id="article-content"
                     style={[styles.editor.base, styles.editor.content]}>{this.state.content}</div>
            </div>
        );
    }
}

export default Editor;
