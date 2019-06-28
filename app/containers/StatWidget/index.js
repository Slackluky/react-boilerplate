/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import {
  Statistic,
  Card,
  Divider,
  Button,
  Table,
  Icon,
  Grid,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';
import { VerticalBarSeries, FlexibleWidthXYPlot } from 'react-vis';
import * as Utils from './utilities';

class StatWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      people: [],
    };
  }

  componentDidMount() {
    new Promise((resolve, reject) => {
      Utils.getPeople('https://swapi.co/api/people', [], resolve, reject);
    }).then(response => {
      this.setState({ people: response });
      this.setState({ count: response.length });
    });
  }

  render() {
    const { count } = this.state;

    const visData = this.state.people.map((people, i) => ({
      x: i,
      y: parseFloat(people.height),
    }));

    const highestHeight = []
      .concat(this.state.people)
      .sort((a, b) => b.height - a.height)
      .slice(0, 5)
      .map(people => (
        <Table.Row key={people.name}>
          <Table.Cell>{people.name}</Table.Cell>
          <Table.Cell textAlign="right">{people.height}</Table.Cell>
        </Table.Row>
      ));

    return (
      <div>
        <Card className="card">
          <Statistic inverted size="small">
            <Statistic.Label as="p">Total Character right now</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          Characters Height chart
          <Divider inverted fitted />
          <FlexibleWidthXYPlot
            height={100}
            margin={{ top: 10, left: 0, right: 0, bottom: 0 }}
          >
            <VerticalBarSeries
              data={visData}
              style={{ stroke: 'aliceblue', fill: 'aliceblue' }}
            />
          </FlexibleWidthXYPlot>
          <Table inverted compact>
            <Table.Header>
              <Table.Row>
                <Table.Cell>Top Tallest Character</Table.Cell>
                <Table.Cell textAlign="right">Height(cm)</Table.Cell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{highestHeight}</Table.Body>
          </Table>
          <Divider inverted fitted />
          <Grid>
            <Grid.Column width={4} />
            <Grid.Column width={12}>
              <Button icon floated="right">
                REAL-TIME REPORT <Icon name="right chevron" />
              </Button>
            </Grid.Column>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default StatWidget;
