import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, Legend } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Simple/Legend',
  component: Legend,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        { data: [120, 200, 150, 80, 70], type: 'bar', name: 'Sales' },
      ]}
    >
      <Legend />
    </BarChart>
  ),
};

export const PositionedRight: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        { data: [120, 200, 150, 80, 70], type: 'bar', name: 'Sales' },
        { data: [100, 150, 120, 100, 90], type: 'bar', name: 'Revenue' },
      ]}
    >
      <Legend orient="vertical" right={0} />
    </BarChart>
  ),
};
