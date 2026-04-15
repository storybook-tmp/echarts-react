import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { ScatterChart } from './charts';
import { Legend, Title, Tooltip } from './components';

const meta = {
  title: 'AI Generated/Complex/ScatterChart',
  component: ScatterChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicScatter: Story = {
  render: (args) => (
    <ScatterChart {...args}>
      <Title text="Correlation Analysis" />
      <Tooltip trigger="item" />
    </ScatterChart>
  ),
  args: {
    style: { width: '700px', height: '500px' },
    xAxis: { type: 'value', scale: true },
    yAxis: { type: 'value', scale: true },
    series: [
      {
        data: [
          [10, 8],
          [8, 13],
          [11, 11],
          [6, 7],
          [7, 10],
          [14, 8],
        ],
        type: 'scatter',
        name: 'Dataset 1',
      },
    ],
  },
};

export const MultipleScatterSeries: Story = {
  render: (args) => (
    <ScatterChart {...args}>
      <Title text="Multi-Dataset Scatter Plot" subtext="Dimension comparison" />
      <Legend />
      <Tooltip trigger="item" />
    </ScatterChart>
  ),
  args: {
    style: { width: '800px', height: '500px' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [
      {
        data: [
          [15, 20],
          [20, 25],
          [18, 22],
          [25, 18],
        ],
        type: 'scatter',
        name: 'Group A',
      },
      {
        data: [
          [10, 15],
          [12, 14],
          [14, 16],
          [16, 12],
        ],
        type: 'scatter',
        name: 'Group B',
      },
    ],
  },
};
