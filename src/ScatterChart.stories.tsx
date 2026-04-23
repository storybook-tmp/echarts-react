import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { ScatterChart } from './charts.js';
import { Legend, Title, Tooltip } from './components.js';

const meta = {
  component: ScatterChart,
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {} as never,
  render: () => (
    <ScatterChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'value', splitLine: { show: false } }}
      yAxis={{ type: 'value', splitLine: { show: false } }}
      series={[
        {
          data: [
            [10, 8],
            [8, 16],
            [4, 8],
            [7, 10],
            [13, 13],
            [10, 11],
            [11, 11],
            [14, 12],
            [12, 15],
            [16, 13],
          ],
          type: 'scatter',
          symbolSize: 8,
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
    <ScatterChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'value', splitLine: { show: false } }}
      yAxis={{ type: 'value', splitLine: { show: false } }}
      series={[
        {
          data: [
            [10, 8],
            [8, 16],
            [4, 8],
            [7, 10],
            [13, 13],
          ],
          type: 'scatter',
          symbolSize: 8,
          name: 'Group A',
        },
        {
          data: [
            [10, 11],
            [11, 11],
            [14, 12],
            [12, 15],
            [16, 13],
          ],
          type: 'scatter',
          symbolSize: 8,
          name: 'Group B',
        },
      ]}
    >
      <Title text="Scatter Plot" />
      <Legend />
      <Tooltip />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const BubbleChart: Story = {
  args: {} as never,
  render: () => (
    <ScatterChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{ type: 'value', splitLine: { show: false } }}
      yAxis={{ type: 'value', splitLine: { show: false } }}
      series={[
        {
          data: [
            [10, 8, 15],
            [8, 16, 12],
            [4, 8, 8],
            [7, 10, 20],
            [13, 13, 14],
          ],
          type: 'scatter',
          symbolSize: function (data) {
            return data[2] as number;
          },
          name: 'Bubble Data',
        },
      ]}
    >
      <Title text="Bubble Chart" subtext="Size represents value" />
      <Tooltip formatter="{b}: ({c[0]}, {c[1]})" />
    </ScatterChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};
