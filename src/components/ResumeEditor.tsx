import React from 'react';
import styles from './css-modules/editor.module.less';
import { Button } from 'antd';
class ResumeEditor extends React.Component {
    render() {
        return <div className={styles["editor-container"]}>
            Resume Editor
            <Button>button</Button>
        </div>
    }
}

export default ResumeEditor;