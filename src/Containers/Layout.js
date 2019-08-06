import React, { Component } from 'react';
import { calculateCharts } from 'helpers/calculateCharts';
import ChartWindow from './ChartWindow';

class Layout extends Component {
  state = {
    lines: []
  };

  componentDidMount() {
    const { charts } = this.props;
    const lines = calculateCharts(charts, 3, true);
    this.setState({
      ...this.state,
      lines
    });
  }

  render() {
    const { lines } = this.state;
    return (
      <div className="vh-100">
        {lines.length !== 0 &&
          lines.map((line, index) => (
              <div key={index} className={`${lines.length > 1 ? 'h-50' : 'h-100'} w-100 row m-0`}>
                {line.map(chart => {
                  return (
                    <div key={chart.id} className={`${line.length === 3 ? 'col-4' : 'col'} h-100 w-100`}>
                      <h3 className='text-center' style={{ height: '15%' }}>
                        {chart.name}
                      </h3>
                     <div className='w-100 pb-2 pt-0' style={{ height: '85%' }}>
                       <ChartWindow chart={chart} />
                     </div>
                    </div>
                  );
                })}
              </div>
            )
          )}
      </div>
    );
  }
}

export default Layout;
