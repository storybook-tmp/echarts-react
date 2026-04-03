import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, MarkLine } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Medium/MarkLine',
  component: MarkLine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkLine>;

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
        },
      ]}
    >
      <MarkLine data={[{ type: 'average', name: 'Average' }]} />
    </BarChart>
  ),
};

export const WithMultipleLines: Story = {
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
      <MarkLine
        data={[
          { type: 'average', name: 'Average' },
          { type: 'max', name: 'Maximum' },
          { type: 'min', name: 'Minimum' },
        ]}
      />
    </BarChart>
  ),
};
