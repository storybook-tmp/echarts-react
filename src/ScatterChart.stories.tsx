import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart } from './charts';

const meta = {
  title: 'AI Generated/Simple/ScatterChart',
  component: ScatterChart,
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: {},
    yAxis: {},
    series: [
      {
        type: 'scatter',
        data: [
          [10, 8.04],
          [8, 6.95],
          [13, 7.58],
          [9, 8.81],
          [11, 8.33],
          [14, 9.96],
          [6, 7.24],
          [4, 4.26],
          [12, 10.84],
          [7, 4.82],
          [5, 5.68],
        ],
      },
    ],
  },
};

export const MultiSeries: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: {},
    yAxis: {},
    series: [
      {
        type: 'scatter',
        data: [
          [10, 8.04],
          [8, 6.95],
          [13, 7.58],
          [9, 8.81],
          [11, 8.33],
        ],
      },
      {
        type: 'scatter',
        data: [
          [14, 9.96],
          [6, 7.24],
          [4, 4.26],
          [12, 10.84],
          [7, 4.82],
        ],
      },
    ],
  },
};
