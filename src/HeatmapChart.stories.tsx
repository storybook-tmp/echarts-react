import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeatmapChart } from './charts';
import { VisualMap } from './components';
import { GridComponent } from 'echarts/components';

const hours = ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'];
const days = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

const heatmapData = [
  [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 3], [0, 4, 2], [0, 5, 4], [0, 6, 1],
  [1, 0, 7], [1, 1, 0], [1, 2, 2], [1, 3, 1], [1, 4, 3], [1, 5, 2], [1, 6, 0],
  [2, 0, 1], [2, 1, 3], [2, 2, 4], [2, 3, 6], [2, 4, 8], [2, 5, 5], [2, 6, 2],
  [3, 0, 7], [3, 1, 2], [3, 2, 6], [3, 3, 9], [3, 4, 4], [3, 5, 3], [3, 6, 1],
  [4, 0, 1], [4, 1, 3], [4, 2, 5], [4, 3, 2], [4, 4, 7], [4, 5, 6], [4, 6, 8],
  [5, 0, 2], [5, 1, 1], [5, 2, 9], [5, 3, 4], [5, 4, 3], [5, 5, 2], [5, 6, 5],
];

const meta = {
  title: 'AI Generated/Medium/HeatmapChart',
  component: HeatmapChart,
} satisfies Meta<typeof HeatmapChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <HeatmapChart
      use={GridComponent}
      style={{ width: 700, height: 400 }}
      xAxis={{ type: 'category', data: hours, splitArea: { show: true } }}
      yAxis={{ type: 'category', data: days, splitArea: { show: true } }}
      series={[{
        type: 'heatmap',
        data: heatmapData,
        label: { show: true },
      }]}
    >
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, orient: 'horizontal', left: 'center', bottom: 0 }} />
    </HeatmapChart>
  ),
};

export const Minimal: Story = {
  render: () => (
    <HeatmapChart
      use={GridComponent}
      style={{ width: 500, height: 300 }}
      xAxis={{ type: 'category', data: ['A', 'B', 'C', 'D'] }}
      yAxis={{ type: 'category', data: ['X', 'Y', 'Z'] }}
      series={[{
        type: 'heatmap',
        data: [
          [0, 0, 1], [0, 1, 5], [0, 2, 3],
          [1, 0, 8], [1, 1, 2], [1, 2, 6],
          [2, 0, 4], [2, 1, 9], [2, 2, 7],
          [3, 0, 2], [3, 1, 3], [3, 2, 1],
        ],
        label: { show: true },
      }]}
    >
      <VisualMap visualMap={{ min: 0, max: 10, calculable: true, right: 0, top: 'center' }} />
    </HeatmapChart>
  ),
};
