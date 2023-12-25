import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useState } from 'react';

import styles from './styles.module.css';

export default function MainPage() {
  const [showDocumentation, setShowDocumentation] = useState(false);

  return (
    <div className={styles.Container}>
      <div className={styles.TopRow}>
        <p>
          <button
            className={styles.Button}
            onClick={() => setShowDocumentation(!showDocumentation)}
          >
            {showDocumentation ? 'hide' : 'show'} documentation
          </button>
        </p>
      </div>
      <div className={styles.BottomRow}>
        <PanelGroup direction="horizontal">
          {showDocumentation && (
            <>
              <Panel
                className={styles.Panel}
                collapsible={false}
                defaultSize={20}
                order={1}
                minSize={10}
              >
                <div className={styles.PanelContent}>documentation</div>
              </Panel>
              <PanelResizeHandle className={styles.ResizeHandleOuter} />
            </>
          )}
          <Panel
            className={styles.Panel}
            collapsible={false}
            defaultSize={50}
            order={2}
            minSize={10}
          >
            <div className={styles.PanelContent}>
              <PanelGroup direction="vertical">
                <Panel
                  className={styles.Panel}
                  collapsible={false}
                  defaultSize={80}
                  order={3}
                  minSize={10}
                >
                  <div className={styles.PanelContent}>Query editor</div>
                </Panel>
                <PanelResizeHandle className={styles.ResizeHandleInner} />
                <Panel
                  className={styles.Panel}
                  collapsible={false}
                  defaultSize={20}
                  order={3}
                  minSize={10}
                >
                  <div className={styles.PanelContent}>
                    Variable/Headers editor
                  </div>
                </Panel>
              </PanelGroup>
            </div>
          </Panel>
          <PanelResizeHandle className={styles.ResizeHandleOuter} />
          <Panel
            className={styles.Panel}
            collapsible={false}
            defaultSize={50}
            order={3}
            minSize={10}
          >
            <div className={styles.PanelContent}>Response view</div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}
