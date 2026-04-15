import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, Title } from './index.js';

const meta = {
  title: 'AI Generated/Simple/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

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
      <Title text="Sales Data" />
    </BarChart>
  ),
};

export const WithSubtext: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[{ data: [120, 200, 150, 80, 70], type: 'bar' }]}
    >
      <Title text="Sales Report" subtext="Monthly Overview" />
    </BarChart>
  ),
};
