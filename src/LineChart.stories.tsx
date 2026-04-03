import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from '@fanciers/echarts-react';

const meta: Meta = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={{ type: 'line', data: [150, 230, 224, 218, 135, 147, 260] }}
    />
  ),
};

export const MultiSeries: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [120, 200, 150, 80, 70, 110], name: 'Product A' },
        { type: 'line', data: [60, 140, 190, 130, 160, 90], name: 'Product B' },
        { type: 'line', data: [90, 100, 120, 160, 140, 180], name: 'Product C' },
      ]}
    />
  ),
};

export const AreaChart: Story = {
  render: () => (
    <LineChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [150, 230, 224, 218, 135, 147, 260], areaStyle: {}, name: 'Series A' },
        { type: 'line', data: [80, 120, 160, 200, 180, 140, 100], areaStyle: {}, name: 'Series B' },
      ]}
    />
  ),
};
