import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from './charts';

const meta = {
  title: 'AI Generated/Simple/BarChart',
  component: BarChart,
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: [120, 200, 150, 80, 70] }],
  },
};

export const Horizontal: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: { type: 'value' },
    yAxis: { type: 'category', data: ['Brazil', 'Indonesia', 'USA', 'India', 'China'] },
    series: [{ type: 'bar', data: [18203, 23489, 29034, 104970, 131744] }],
  },
};
