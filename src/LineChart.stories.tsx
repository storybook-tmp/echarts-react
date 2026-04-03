import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './charts';
import { Title, Legend } from './components';

const meta = {
  title: 'AI Generated/Medium/LineChart',
  component: LineChart,
  render: (args) => (
    <LineChart {...args}>
      <Title title={{ text: 'Weekly Sales', left: 'center' }} />
      <Legend legend={{ bottom: 0 }} />
    </LineChart>
  ),
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSeries: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', name: 'Sales', data: [150, 230, 224, 218, 135, 147, 260] }],
  },
};

export const MultiSeries: Story = {
  args: {
    style: { width: 600, height: 400 },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      { type: 'line', name: 'Email', data: [120, 132, 101, 134, 90, 230, 210] },
      { type: 'line', name: 'Video Ads', data: [220, 182, 191, 234, 290, 330, 310] },
      { type: 'line', name: 'Search', data: [150, 232, 201, 154, 190, 330, 410] },
    ],
  },
};
