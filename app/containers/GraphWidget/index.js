import React from 'react';
import { Card, Tab } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../StatWidget/styles.css';

import {
  LineSeries,
  FlexibleWidthXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';

const TabExampleBasic = () => (
  <div>
    <Card className="card">
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </Card>
  </div>
);

export default TabExampleBasic;

const panes = [
  {
    menuItem: 'Tab 1',
    render: () => (
      <Tab.Pane attached={false}>
        <FlexibleWidthXYPlot
          xType="ordinal"
          height={400}
          margin={{ top: 30, left: 30, right: 30, bottom: 30 }}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries
            data={[
              { x: 1, y: 4 },
              { x: 5, y: 2 },
              { x: 15, y: 6 },
              { x: 20, y: 60 },
            ]}
            style={{ stroke: 'violet' }}
          />
        </FlexibleWidthXYPlot>
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];
