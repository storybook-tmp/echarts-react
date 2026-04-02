import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/ScatterChart',
  component: ScatterChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '500px', height: '400px' },
    xAxis: { type: 'value', name: 'X' },
    yAxis: { type: 'value', name: 'Y' },
    series: [
      {
        type: 'scatter',
        symbolSize: 10,
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [13.4, 7.5],
          [10.0, 6.84],
          [8.1, 5.76],
          [12.0, 8.24],
        ],
      },
    ],
  },
};

export const MultiCluster: Story = {
  args: {
    style: { width: '500px', height: '400px' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'scatter',
        name: 'Cluster A',
        symbolSize: 8,
        data: [
          [2.0, 3.5],
          [2.5, 4.0],
          [3.0, 3.8],
          [2.8, 4.2],
          [3.2, 3.6],
        ],
      },
      {
        type: 'scatter',
        name: 'Cluster B',
        symbolSize: 8,
        data: [
          [7.0, 7.5],
          [7.5, 8.0],
          [8.0, 7.8],
          [7.8, 8.2],
          [8.2, 7.6],
        ],
      },
    ],
  },
};
