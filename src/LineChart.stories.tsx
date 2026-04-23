import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, Legend, LineChart, Title, Tooltip } from '@fanciers/echarts-react';

const meta = {
  component: LineChart,
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const ReadmeExample: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 300 }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          data: [150, 230, 224, 218, 135, 147, 260],
        },
      ]}
    />
  ),
};

export const MixedTraffic: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 340 }}
      compose={[BarChart]}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={[
        { type: 'value', name: 'Visitors' },
        { type: 'value', name: 'Signups' },
      ]}
      series={[
        {
          type: 'bar',
          name: 'Visitors',
          data: [320, 332, 301, 334, 390, 330, 320],
          barMaxWidth: 24,
        },
        {
          type: 'line',
          name: 'Signups',
          yAxisIndex: 1,
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210],
        },
      ]}
    >
      <Title text="Weekly traffic mix" left="center" />
      <Tooltip trigger="axis" />
      <Legend top={28} />
    </LineChart>
  ),
};
