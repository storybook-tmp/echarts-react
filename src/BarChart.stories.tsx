import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/BarChart',
  component: BarChart,
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ type: 'bar', data: [120, 200, 150, 80, 70, 110, 130] }],
  },
};

export const Stacked: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    legend: { data: ['Email', 'Video Ads'] },
    series: [
      { name: 'Email', type: 'bar', stack: 'total', data: [120, 132, 101, 134, 90, 230, 210] },
      { name: 'Video Ads', type: 'bar', stack: 'total', data: [150, 232, 201, 154, 190, 330, 410] },
    ],
  },
};
