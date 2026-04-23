import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { LineChart } from './charts.js';
import { DataZoom, Legend, Title, Tooltip } from './components.js';

const meta = {
  component: LineChart,
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {} as never,
  render: () => (
    <LineChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          smooth: true,
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const MultiSeries: Story = {
  args: {} as never,
  render: () => (
    <LineChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          smooth: true,
          name: 'Temperature',
        },
        {
          data: [100, 180, 130, 100, 80, 90, 110],
          type: 'line',
          smooth: true,
          name: 'Humidity',
        },
      ]}
    >
      <Legend />
      <Tooltip />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const WithDataZoom: Story = {
  args: {} as never,
  render: () => (
    <LineChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'line',
          smooth: true,
        },
      ]}
    >
      <Title text="Data with Zoom Control" />
      <DataZoom type="slider" xAxisIndex={0} />
      <Tooltip />
    </LineChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};
