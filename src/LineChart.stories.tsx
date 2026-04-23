import type { Meta, StoryObj } from '@storybook/react-vite';

import { CanvasRenderer, Legend, LineChart, Tooltip } from './index.js';

const meta = {
  title: 'AI Generated/Complex/LineChart',
  component: LineChart,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <LineChart {...args}>
      <Legend top={0} />
      <Tooltip trigger="axis" />
    </LineChart>
  ),
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AreaTrend: Story = {
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 360 },
    xAxis: { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: {
      type: 'line',
      name: 'Traffic',
      smooth: true,
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      areaStyle: {
        opacity: 0.18,
      },
    },
  },
};

export const DualSeries: Story = {
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 360 },
    xAxis: { type: 'category', boundaryGap: false, data: ['Q1', 'Q2', 'Q3', 'Q4'] },
    yAxis: { type: 'value' },
    series: [
      { type: 'line', name: 'Plan', smooth: true, data: [320, 420, 460, 540] },
      { type: 'line', name: 'Actual', smooth: true, data: [300, 470, 430, 590] },
    ],
  },
};
