import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EffectScatterChart } from './charts';
import { Tooltip } from './components';

const meta = {
  title: 'AI Generated/Complex/EffectScatterChart',
  component: EffectScatterChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic animated scatter — ripple effect on each point
export const Default: Story = {
  args: {
    style: { width: '500px', height: '400px' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'effectScatter',
        symbolSize: 20,
        data: [
          [10, 8],
          [20, 15],
          [30, 25],
          [15, 10],
          [25, 20],
          [35, 30],
        ],
      },
    ],
  },
};

// Composed with Tooltip child for interactive hover labels
export const WithTooltip: Story = {
  render: () =>
    React.createElement(
      EffectScatterChart,
      {
        style: { width: '500px', height: '400px' },
        xAxis: { type: 'value', name: 'X Axis' },
        yAxis: { type: 'value', name: 'Y Axis' },
        series: [
          {
            type: 'effectScatter',
            symbolSize: 15,
            data: [
              [10, 8],
              [20, 15],
              [30, 25],
              [15, 10],
              [25, 20],
            ],
          },
        ],
      },
      React.createElement(Tooltip, { tooltip: { trigger: 'item' } }),
    ),
};
