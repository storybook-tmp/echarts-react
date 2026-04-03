import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './charts';

const meta = {
  title: 'AI Generated/Medium/LineChart',
  component: LineChart,
  decorators: [
    (Story) => (
      <div style={{ width: 600, height: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', data: [150, 230, 224, 218, 135, 147, 260] }],
  },
};

export const MultiSeries: Story = {
  args: {
    style: { width: '100%', height: '100%' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    legend: { data: ['Email', 'Video Ads'] },
    series: [
      { name: 'Email', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] },
      { name: 'Video Ads', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] },
    ],
  },
};
