import type { Meta, StoryObj } from '@storybook/react-vite';

import { CanvasRenderer, LineChart, MarkPoint, Tooltip } from './index.js';

const salesData = [150, 230, 224, 218, 135, 147, 260];

const meta = {
  title: 'AI Generated/Medium/MarkPoint',
  component: MarkPoint,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <LineChart
      style={{ width: '100%', height: 340 }}
      use={CanvasRenderer}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={{
        type: 'line',
        smooth: true,
        data: salesData,
        areaStyle: {
          opacity: 0.12,
        },
      }}
    >
      <Tooltip trigger="axis" />
      <MarkPoint {...args} />
    </LineChart>
  ),
} satisfies Meta<typeof MarkPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MinMax: Story = {
  args: {
    data: [{ type: 'max', name: 'Peak' }, { type: 'min', name: 'Low' }],
  },
};

export const Milestones: Story = {
  args: {
    symbolSize: 56,
    data: [
      { coord: ['Tue', 230], value: 230, name: 'Campaign launch' },
      { coord: ['Sun', 260], value: 260, name: 'Weekend spike' },
    ],
    label: {
      formatter: '{b}',
    },
  },
};
