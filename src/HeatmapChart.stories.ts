import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridComponent, VisualMapComponent } from 'echarts/components';
import { HeatmapChart } from './charts';
import { VisualMap } from './components';

const meta = {
  title: 'AI Generated/Complex/HeatmapChart',
  component: HeatmapChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const periods = ['Morning', 'Afternoon', 'Evening'];
const heatData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0],
  [1, 0, 3], [1, 1, 7], [1, 2, 2],
  [2, 0, 8], [2, 1, 2], [2, 2, 4],
  [3, 0, 6], [3, 1, 3], [3, 2, 1],
  [4, 0, 4], [4, 1, 8], [4, 2, 5],
];

// visualMap passed as a direct prop option (extensions registered via `use`)
export const Default: Story = {
  render: () =>
    React.createElement(HeatmapChart, {
      style: { width: '600px', height: '400px' },
      use: [GridComponent, VisualMapComponent],
      xAxis: { type: 'category', data: days },
      yAxis: { type: 'category', data: periods },
      visualMap: { min: 0, max: 10 },
      series: [{ type: 'heatmap', data: heatData }],
    }),
};

// VisualMap configured via the child component composition pattern
export const WithVisualMapChild: Story = {
  render: () =>
    React.createElement(
      HeatmapChart,
      {
        style: { width: '600px', height: '400px' },
        use: GridComponent,
        xAxis: { type: 'category', data: days },
        yAxis: { type: 'category', data: periods },
        series: [{ type: 'heatmap', data: heatData, label: { show: true } }],
      },
      // VisualMap as child: its props use the { visualMap: {...} } shape from ComposeOption<VisualMapComponentOption>
      React.createElement(VisualMap, { visualMap: { min: 0, max: 10, calculable: true } }),
    ),
};
