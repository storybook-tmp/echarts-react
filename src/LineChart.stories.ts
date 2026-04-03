import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/LineChart',
  component: LineChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: 400, height: 300 },
    xAxis: [{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }],
    yAxis: [{}],
    series: [{ type: 'line', data: [150, 230, 224, 218, 135, 147, 260] }],
  },
};

export const Smooth: Story = {
  args: {
    style: { width: 400, height: 300 },
    xAxis: [{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }],
    yAxis: [{}],
    series: [{ type: 'line', data: [820, 932, 901, 934, 1290, 1330, 1320], smooth: true }],
  },
};
