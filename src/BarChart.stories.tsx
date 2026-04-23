import type { Meta, StoryObj } from '@storybook/react-vite';

import { BarChart, CanvasRenderer, Legend, Tooltip } from './index.js';

const meta = {
  title: 'AI Generated/Complex/BarChart',
  component: BarChart,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <BarChart {...args}>
      <Legend top={0} />
      <Tooltip trigger="axis" />
    </BarChart>
  ),
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupedSales: Story = {
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 360 },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    yAxis: { type: 'value' },
    series: [
      { type: 'bar', name: '2025', data: [120, 200, 150, 80, 70], barWidth: 18 },
      { type: 'bar', name: '2026', data: [90, 170, 210, 110, 95], barWidth: 18 },
    ],
  },
};

export const StackedPipeline: Story = {
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 360 },
    xAxis: { type: 'category', data: ['Lead', 'Qualified', 'Proposal', 'Won'] },
    yAxis: { type: 'value' },
    series: [
      { type: 'bar', name: 'Inbound', stack: 'total', data: [180, 120, 90, 40] },
      { type: 'bar', name: 'Outbound', stack: 'total', data: [100, 80, 60, 30] },
    ],
  },
};
