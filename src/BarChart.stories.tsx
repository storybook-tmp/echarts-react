import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, Title, Legend, Tooltip } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Complex/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: 'Sales',
        },
      ]}
    >
      <Title text="Weekly Sales" />
      <Legend />
      <Tooltip />
    </BarChart>
  ),
};

export const MultiSeries: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: 'Sales',
        },
        {
          data: [100, 150, 120, 100, 90, 130, 110],
          type: 'bar',
          name: 'Revenue',
        },
      ]}
    >
      <Title text="Sales vs Revenue" />
      <Legend />
      <Tooltip />
    </BarChart>
  ),
};
