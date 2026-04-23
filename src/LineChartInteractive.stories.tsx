import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, DataZoom, Tooltip, Legend } from '@fanciers/echarts-react';

const meta = {
  title: 'AI Generated/Medium/LineChartInteractive',
  component: LineChart,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTooltip: Story = {
  render: () => (
    <LineChart
      style={{ width: 600, height: 400 }}
      xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }]}
      yAxis={[{}]}
      series={[
        { type: 'line', name: 'Week 1', data: [150, 230, 224, 218, 135, 147, 260] },
        { type: 'line', name: 'Week 2', data: [98, 165, 180, 192, 167, 143, 220] },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <Legend legend={{}} />
    </LineChart>
  ),
};

export const WithDataZoom: Story = {
  render: () => (
    <LineChart
      style={{ width: 600, height: 400 }}
      xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }]}
      yAxis={[{}]}
      series={[{ type: 'line', data: [820, 932, 901, 934, 1290, 1330, 1320, 1200, 1100, 980, 1050, 1150], smooth: true }]}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
      <DataZoom dataZoom={[{ type: 'inside' }, { type: 'slider' }]} />
    </LineChart>
  ),
};
