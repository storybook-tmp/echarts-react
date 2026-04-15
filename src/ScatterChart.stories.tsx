import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScatterChart } from './charts';

const meta = {
  title: 'AI Generated/Complex/ScatterChart',
  component: ScatterChart,
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'scatter',
        data: [
          [10.0, 8.04], [8.07, 6.95], [13.0, 7.58], [9.05, 8.81],
          [11.0, 8.33], [14.0, 7.66], [13.4, 6.81], [10.0, 6.33],
          [14.0, 8.96], [12.5, 6.82], [9.15, 7.2], [11.5, 7.2],
          [3.03, 4.23], [12.2, 7.83], [2.02, 4.47], [1.05, 3.33],
          [4.05, 4.96], [6.03, 7.24], [12.0, 6.26], [12.0, 8.84],
        ],
      },
    ],
  },
};

export const MultiGroup: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    legend: { data: ['Group A', 'Group B'] },
    series: [
      {
        name: 'Group A',
        type: 'scatter',
        data: [
          [10.0, 8.04], [8.07, 6.95], [13.0, 7.58], [9.05, 8.81],
          [11.0, 8.33], [14.0, 7.66], [13.4, 6.81], [10.0, 6.33],
        ],
      },
      {
        name: 'Group B',
        type: 'scatter',
        data: [
          [6.95, 15.0], [8.81, 13.05], [8.33, 9.0], [7.66, 11.0],
          [6.81, 14.4], [6.33, 8.0], [8.96, 12.0], [7.2, 10.15],
        ],
      },
    ],
  },
};
