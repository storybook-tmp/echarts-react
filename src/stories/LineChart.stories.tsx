import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: 400, height: 300 },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', data: [150, 230, 224, 218, 135, 147] }],
  },
};

export const Smooth: Story = {
  args: {
    style: { width: 400, height: 300 },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', smooth: true, data: [150, 230, 224, 218, 135, 147] }],
  },
};
