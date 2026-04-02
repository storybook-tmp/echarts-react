import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, MarkArea } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Medium/MarkArea',
  component: MarkArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MarkArea>;

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
          markArea: {
            data: [
              [{ name: 'Peak', xAxis: 1 }, { xAxis: 3 }],
            ],
          },
        },
      ]}
    >
      <MarkArea data={[[{ name: 'High Area', xAxis: 1 }, { xAxis: 3 }]]} />
    </BarChart>
  ),
};

export const WithLabel: Story = {
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
      <MarkArea data={[[{ name: 'Weekend', xAxis: 5 }, { xAxis: 6 }]]} />
    </BarChart>
  ),
};
