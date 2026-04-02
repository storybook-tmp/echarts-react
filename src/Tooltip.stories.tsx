import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, Tooltip } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Simple/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          smooth: true,
        },
      ]}
    >
      <Tooltip trigger="axis" />
    </LineChart>
  ),
};

export const CrosshairTooltip: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: '400px' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{
        type: 'value',
      }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          smooth: true,
        },
      ]}
    >
      <Tooltip
        trigger="axis"
        axisPointer={{ type: 'cross' }}
      />
    </LineChart>
  ),
};
