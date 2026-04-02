import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/BarChart',
  component: BarChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: 400, height: 300 },
    xAxis: [{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }],
    yAxis: [{}],
    series: [{ type: 'bar', data: [120, 200, 150, 80, 70, 110, 130] }],
  },
};

export const MultiSeries: Story = {
  args: {
    style: { width: 400, height: 300 },
    legend: {},
    xAxis: [{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }],
    yAxis: [{}],
    series: [
      { type: 'bar', name: 'Revenue', data: [120, 200, 150, 80, 70] },
      { type: 'bar', name: 'Cost', data: [60, 80, 50, 30, 40] },
    ],
  },
};
