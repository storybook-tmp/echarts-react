import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '600px', height: '400px' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }],
  },
};

export const MultipleSeriesChart: Story = {
  args: {
    style: { width: '600px', height: '400px' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      { data: [120, 200, 150, 80, 70, 110, 130], type: 'bar', name: 'Series 1' },
      { data: [100, 180, 130, 90, 80, 100, 120], type: 'bar', name: 'Series 2' },
    ],
  },
};
