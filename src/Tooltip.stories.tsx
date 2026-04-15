import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, Tooltip } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Simple/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[{ data: [120, 200, 150, 80, 70], type: 'bar' }]}
    >
      <Tooltip />
    </BarChart>
  ),
};

export const CustomFormatter: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        { data: [120, 200, 150, 80, 70], type: 'bar', name: 'Sales' },
      ]}
    >
      <Tooltip formatter="{b}: {c} units" />
    </BarChart>
  ),
};
