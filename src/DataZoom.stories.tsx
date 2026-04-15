import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataZoom } from './components';
import { LineChart } from './charts';

const largeData = Array.from({ length: 100 }, (_, i) => Math.sin(i / 5) * 50 + 50 + Math.random() * 20);
const labels = Array.from({ length: 100 }, (_, i) => `Day ${i + 1}`);

const meta = {
  title: 'AI Generated/Complex/DataZoom',
  component: DataZoom,
  decorators: [
    (Story) => (
      <LineChart
        style={{ width: 700, height: 400 }}
        xAxis={{ type: 'category', data: labels }}
        yAxis={{ type: 'value' }}
        series={[{ type: 'line', data: largeData, smooth: true }]}
        grid={{ bottom: 80 }}
      >
        <Story />
      </LineChart>
    ),
  ],
} satisfies Meta<typeof DataZoom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderZoom: Story = {
  args: {
    dataZoom: [{ type: 'slider', start: 20, end: 60 }],
  },
};

export const InsideZoom: Story = {
  args: {
    dataZoom: [{ type: 'inside', start: 0, end: 50 }],
  },
};
