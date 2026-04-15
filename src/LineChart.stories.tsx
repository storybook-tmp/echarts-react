import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, Title, Legend, Tooltip } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Complex/LineChart',
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          name: 'Temperature',
        },
      ]}
    >
      <Title text="Daily Temperature" />
      <Legend />
      <Tooltip />
    </LineChart>
  ),
};

export const MultipleLines: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          name: 'High',
          smooth: true,
        },
        {
          data: [60, 100, 75, 40, 35, 55, 65],
          type: 'line',
          name: 'Low',
          smooth: true,
        },
      ]}
    >
      <Title text="Temperature Range" />
      <Legend />
      <Tooltip />
    </LineChart>
  ),
};
