import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
// Import renderer to register it with echarts
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, Title, Legend, Tooltip } from './index.js';

// Ensure renderer is loaded
void CanvasRenderer;

const meta = {
  title: 'AI Generated/Complex/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: 400 }}
      series={[
        {
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Affiliate' },
            { value: 300, name: 'Video' },
          ],
          type: 'pie',
        },
      ]}
    >
      <Title text="Traffic Sources" />
      <Legend />
      <Tooltip />
    </PieChart>
  ),
};

export const Donut: Story = {
  render: () => (
    <PieChart
      style={{ width: '100%', height: 400 }}
      series={[
        {
          data: [
            { value: 1048, name: 'Product A' },
            { value: 735, name: 'Product B' },
            { value: 580, name: 'Product C' },
            { value: 484, name: 'Product D' },
          ],
          type: 'pie',
          radius: ['40%', '70%'],
        },
      ]}
    >
      <Title text="Product Sales" />
      <Legend orient="vertical" right={10} />
      <Tooltip />
    </PieChart>
  ),
};
