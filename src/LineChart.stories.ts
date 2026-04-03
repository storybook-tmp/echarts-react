import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/LineChart',
  component: LineChart,
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
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260],
        smooth: true,
      },
    ],
  },
};

export const MultiLine: Story = {
  args: {
    style: { width: '500px', height: '400px' },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'line',
        name: 'Email',
        data: [120, 132, 101, 134, 90, 230],
      },
      {
        type: 'line',
        name: 'Union Ads',
        data: [220, 182, 191, 234, 290, 330],
      },
      {
        type: 'line',
        name: 'Direct',
        data: [150, 232, 201, 154, 190, 330],
      },
    ],
  },
};
