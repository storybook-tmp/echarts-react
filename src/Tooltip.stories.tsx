import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './components';
import { BarChart } from './charts';

const meta = {
  title: 'AI Generated/Complex/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <BarChart
        style={{ width: 600, height: 400 }}
        xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
        yAxis={{ type: 'value' }}
        series={[
          { type: 'bar', name: 'Series A', data: [120, 200, 150, 80, 70] },
          { type: 'bar', name: 'Series B', data: [60, 140, 100, 130, 90] },
        ]}
      >
        <Story />
      </BarChart>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AxisTrigger: Story = {
  args: {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  },
};

export const ItemTrigger: Story = {
  args: {
    tooltip: { trigger: 'item' },
  },
};
