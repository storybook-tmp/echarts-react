import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, LineChart, ScatterChart } from '@fanciers/echarts-react';

const meta: Meta = {
  component: LineChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LineAndBar: Story = {
  render: () => (
    <LineChart
      compose={[BarChart]}
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', data: [120, 200, 150, 80, 70, 110], name: 'Revenue' },
        { type: 'line', data: [90, 160, 140, 100, 90, 130], name: 'Trend' },
      ]}
    />
  ),
};

export const BarAndLineMultiAxis: Story = {
  render: () => (
    <LineChart
      compose={[BarChart]}
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }}
      yAxis={[
        { type: 'value', name: 'Sales' },
        { type: 'value', name: 'Growth %', position: 'right' },
      ]}
      series={[
        { type: 'bar', data: [320, 302, 341, 374, 390, 450], name: 'Sales', yAxisIndex: 0 },
        { type: 'line', data: [5, 8, 12, 15, 18, 22], name: 'Growth', yAxisIndex: 1 },
      ]}
    />
  ),
};

export const LineAndScatter: Story = {
  render: () => (
    <LineChart
      compose={[ScatterChart]}
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'line', data: [150, 230, 224, 218, 135], name: 'Trend', smooth: true },
        { type: 'scatter', data: [160, 210, 240, 200, 150], name: 'Data Points', symbolSize: 12 },
      ]}
    />
  ),
};
