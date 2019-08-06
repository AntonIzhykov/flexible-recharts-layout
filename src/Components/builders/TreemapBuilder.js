import React, { Component } from 'react';
import { Treemap } from 'recharts';

export default class TreemapBuilder extends Component {
  render() {
    return <Treemap {...this.props} />;
  }
}
