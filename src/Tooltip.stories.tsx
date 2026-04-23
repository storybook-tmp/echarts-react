import type { Meta, StoryObj } from '@storybook/react-vite';

import { BarChart, CanvasRenderer, Tooltip } from './index.js';

const meta = {
  title: 'AI Generated/Simple/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <BarChart
      style={{ width: '100%', height: 320 }}
      use={CanvasRenderer}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: 'Target', data: [120, 132, 101, 134, 90], barGap: '20%' },
        { type: 'bar', name: 'Actual', data: [98, 110, 120, 150, 110] },
      ]}
    >
      <Tooltip {...args} />
    </BarChart>
  ),
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AxisHover: Story = {
  args: {
    trigger: 'axis',
  },
};

export const ItemHover: Story = {
  args: {
    trigger: 'item',
    backgroundColor: '#111827',
    textStyle: {
      color: '#f9fafb',
    },
  },
};
