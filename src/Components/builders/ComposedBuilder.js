import React, { Component } from 'react';
import { buildChildren } from './buildChildren';
import {
  ComposedChart,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  Bar,
  Line
} from 'recharts';

export default class ComposedBuilder extends Component {
  render() {
    const {
      referenceArea,
      referenceDot,
      referenceLine,
      cartesianGrid,
      xAxis,
      yAxis,
      toolTip,
      legend,
      brush,
      areas,
      bars,
      lines
    } = this.props;
    return (
      <ComposedChart {...this.props}>
        {referenceArea && <ReferenceArea {...referenceArea} />}
        {referenceDot && <ReferenceDot {...referenceDot} />}
        {referenceLine && <ReferenceLine {...referenceLine} />}
        {cartesianGrid && <CartesianGrid {...cartesianGrid} />}
        {xAxis && <XAxis {...xAxis} />}
        {yAxis && <YAxis {...yAxis} />}
        {toolTip && <Tooltip {...toolTip} />}
        {legend && <Legend {...legend} />}
        {brush && <Brush {...brush} />}
        {areas &&
          areas.map((area, index) => {
            return (
              <Area key={index} {...area}>
                {area.children && area.children.map((child, index) => buildChildren(child, index))}
              </Area>
            );
          })}
        {bars &&
          bars.map((bar, index) => {
            return (
              <Bar key={index} {...bar}>
                {bar.children && bar.children.map((child, index) => buildChildren(child, index))}
              </Bar>
            );
          })}
        {lines &&
          lines.map((line, index) => {
            return (
              <Line key={index} {...line}>
                {line.children && line.children.map((child, index) => buildChildren(child, index))}
              </Line>
            );
          })}
      </ComposedChart>
    );
  }
}
