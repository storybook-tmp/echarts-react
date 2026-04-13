import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: 400, height: 300 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: [120, 200, 150, 80, 70] }],
  },
};

export const Horizontal: Story = {
  args: {
    style: { width: 400, height: 300 },
    xAxis: { type: 'value' },
    yAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
    series: [{ type: 'bar', data: [320, 480, 210, 560] }],
  },
};
