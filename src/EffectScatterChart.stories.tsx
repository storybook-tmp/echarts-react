import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { EffectScatterChart } from './charts.js';
import { Legend, Title, Tooltip } from './components.js';

const meta = {
  component: EffectScatterChart,
} satisfies Meta<typeof EffectScatterChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {} as never,
  render: () => (
    <EffectScatterChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{
        type: 'value',
        splitLine: { show: false },
      }}
      yAxis={{
        type: 'value',
        splitLine: { show: false },
      }}
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
          type: 'effectScatter',
          symbolSize: 8,
          showEffectOn: 'render',
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
    <EffectScatterChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{
        type: 'value',
        splitLine: { show: false },
      }}
      yAxis={{
        type: 'value',
        splitLine: { show: false },
      }}
      series={[
        {
          data: [
            [10, 8],
            [8, 16],
            [4, 8],
          ],
          type: 'effectScatter',
          symbolSize: 8,
          name: 'Group A',
        },
        {
          data: [
            [7, 10],
            [13, 13],
            [10, 11],
          ],
          type: 'effectScatter',
          symbolSize: 8,
          name: 'Group B',
        },
        {
          data: [
            [11, 11],
            [14, 12],
            [12, 15],
          ],
          type: 'effectScatter',
          symbolSize: 8,
          name: 'Group C',
        },
      ]}
    >
      <Title text="Effect Scatter Plot" />
      <Legend />
      <Tooltip />
    </EffectScatterChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const WithRipple: Story = {
  args: {} as never,
  render: () => (
    <EffectScatterChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{
        type: 'value',
        splitLine: { show: false },
      }}
      yAxis={{
        type: 'value',
        splitLine: { show: false },
      }}
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
          type: 'effectScatter',
          symbolSize: 12,
          rippleEffect: {
            brushType: 'stroke',
            scale: 3,
            period: 4,
          },
          itemStyle: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
      ]}
    >
      <Title text="Effect Scatter with Ripple" subtext="Animated scatter plot" />
      <Tooltip />
    </EffectScatterChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};
