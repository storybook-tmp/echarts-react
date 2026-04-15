import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from '@fanciers/echarts-react';

const meta: Meta = {
  component: BarChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Shirts', 'Pants', 'Shoes', 'Hats', 'Socks'] }}
      yAxis={{ type: 'value' }}
      series={{ type: 'bar', data: [120, 200, 150, 80, 70] }}
    />
  ),
};

export const Stacked: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', data: [320, 302, 341, 374], name: 'Online', stack: 'total' },
        { type: 'bar', data: [120, 132, 101, 134], name: 'In-Store', stack: 'total' },
        { type: 'bar', data: [220, 182, 191, 234], name: 'Wholesale', stack: 'total' },
      ]}
    />
  ),
};

export const Horizontal: Story = {
  render: () => (
    <BarChart
      style={{ width: '100%', height: 400 }}
      xAxis={{ type: 'value' }}
      yAxis={{ type: 'category', data: ['Brazil', 'Indonesia', 'USA', 'India', 'China'] }}
      series={{ type: 'bar', data: [18203, 23489, 29034, 104970, 131744] }}
    />
  ),
};
