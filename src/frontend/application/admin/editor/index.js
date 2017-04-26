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
            title: props.title,
            content: props.content,
        };
    }

    componentDidMount() {
        let editor = new MediumEditor(this.refs.editor, {
            placeholder: {
                text: "Article's content here",
                hideOnClick: true
            }
        });
    }

    render() {
        return (
            <div className="editor-container">
                <input id="article-title" style={[styles.editor.base, styles.editor.title]}
                       placeholder="Article's title here" value={this.state.title}/>
                <textarea ref="editor" id="article-content"
                          style={[styles.editor.base, styles.editor.content]}>{this.state.content}</textarea>
            </div>
        );
    }
}

export default Editor;
