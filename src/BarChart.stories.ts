import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/BarChart',
  component: BarChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '500px', height: '400px' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
      },
    ],
  },
};

export const MultiSeries: Story = {
  args: {
    style: { width: '500px', height: '400px' },
    xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'bar',
        name: 'Product A',
        data: [320, 332, 301, 334],
      },
      {
        type: 'bar',
        name: 'Product B',
        data: [120, 132, 101, 134],
      },
    ],
  },
};
