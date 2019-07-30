import React, { ReactNode } from 'react';
import styles from './less-modules/editor.module.less';
import { Collapse, List, Button } from 'antd';
const { Panel } = Collapse;
interface Ipanel {
    header: ReactNode;
    key: string | number;
    component: ReactNode;
}
interface Istate {
    panelList: Array<Ipanel>;
    disabledPanelList: Array<Ipanel>;
}
class ResumeEditor extends React.Component {
    state: Istate = {
        panelList: [
            {
                header: '基本信息',
                key: '1',
                component: () => <div>111</div>,
            },
            {
                header: '学历信息',
                key: '2',
                component: <div>学历信息</div>,
            },
            {
                header: '工作经历/项目经验',
                key: '3',
                component: '3',
            },
            {
                header: '自我评价',
                key: '4',
                component: '4',
            },
        ],
        disabledPanelList: [
            {
                header: '校园经历',
                key: '5',
                component: 111,
            },
            {
                header: '特长',
                key: '6',
                component: 222,
            }
        ]
    }
    renderPanelChildren(node: ReactNode): ReactNode {
        if (typeof node === 'function') {
            return node();
        }
        return node;
    }
    addModule = (panel: Ipanel) => () => {
        const newList = [...this.state.panelList, panel];
        const newDisableList = this.state.disabledPanelList.filter(i => {
            return i.key !== panel.key;
        })
        this.setState({
            panelList: newList,
            disabledPanelList: newDisableList,
        })
    }
    render() {
        const { panelList, disabledPanelList } = this.state;
        const { addModule, renderPanelChildren } = this;
        return <div className={styles['editor-container']}>
            <h2 className={styles['h2']}>信息填写</h2>
            <Collapse
                accordion
                bordered={false}
                defaultActiveKey='basic-info'
                expandIconPosition='right'
            >
                {
                    panelList.map(
                        panel => <Panel
                            key={panel.key}
                            header={panel.header}
                        >
                            {renderPanelChildren(panel.component)}
                        </Panel>
                    )
                }
            </Collapse>
            <h2 className={styles['h2']}>可添加模块</h2>
            <List
                dataSource={disabledPanelList}
                renderItem={item => (
                    <List.Item>
                        <div className={styles['flex-row']}>
                            <span>{item.header}</span>
                            <Button onClick={addModule(item)} type='primary'>添加</Button>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    }
}

export default ResumeEditor;