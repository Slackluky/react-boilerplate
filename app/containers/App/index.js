/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import StatWidget from 'containers/StatWidget/';

// react-vis styling
import '../style.css';

import GlobalStyle from '../../global-styles';
import GraphWidget from '../GraphWidget';

export default function App() {
  return (
    <div>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width="2" />
          <Grid.Column width="10">
            <Container className="graph-container">
              <GraphWidget />
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container className="stat-container">
              <StatWidget />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <GlobalStyle />
    </div>
  );
}
