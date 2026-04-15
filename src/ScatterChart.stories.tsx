import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { SVGRenderer, ScatterChart, Title, Tooltip, VisualMap } from '@fanciers/echarts-react';

const scatterChartStyle = { width: '100%', height: 380, maxWidth: 760 };

const meta = {
  component: ScatterChart,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj;

export const HeightWeightCorrelation: Story = {
  args: {},
  render: () => (
    <ScatterChart
      use={SVGRenderer}
      style={scatterChartStyle}
      title={{ text: 'Height vs weight', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', name: 'Height' }}
      yAxis={{ type: 'value', name: 'Weight' }}
      series={[
        {
          type: 'scatter',
          symbolSize: 14,
          data: [
            [160, 55],
            [168, 59],
            [172, 63],
            [180, 75],
            [188, 88],
          ],
        },
      ]}
    >
      <Title text="Height vs weight" left="center" />
      <Tooltip trigger="item" />
    </ScatterChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Height vs weight')).toBeVisible());
    await expect(canvas.getByText('Height')).toBeVisible();
    await expect(canvas.getByText('Weight')).toBeVisible();
  },
};

export const BubblePerformance: Story = {
  args: {},
  render: () => (
    <ScatterChart
      use={SVGRenderer}
      style={scatterChartStyle}
      title={{ text: 'Bubble performance', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      visualMap={{ min: 10, max: 45, dimension: 2, right: 12, top: 'middle', calculable: true }}
      xAxis={{ type: 'value', name: 'Latency' }}
      yAxis={{ type: 'value', name: 'Throughput' }}
      series={[
        {
          type: 'scatter',
          data: [
            [15, 320, 12],
            [20, 260, 22],
            [24, 210, 35],
            [28, 180, 42],
          ],
          symbolSize: (value) => Number(value[2]),
        },
      ]}
    >
      <Title text="Bubble performance" left="center" />
      <Tooltip trigger="item" />
      <VisualMap min={10} max={45} dimension={2} right={12} top="middle" calculable />
    </ScatterChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Bubble performance')).toBeVisible());
    await expect(canvas.getByText('Latency')).toBeVisible();
    await expect(canvas.getByText('Throughput')).toBeVisible();
  },
};

export const ClusteredPoints: Story = {
  args: {},
  render: () => (
    <ScatterChart
      use={SVGRenderer}
      style={scatterChartStyle}
      title={{ text: 'Clustered points', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', splitLine: { show: true } }}
      yAxis={{ type: 'value', splitLine: { show: true } }}
      series={[
        {
          type: 'scatter',
          data: [
            [8, 12],
            [12, 16],
            [14, 15],
            [38, 42],
            [41, 39],
            [44, 45],
          ],
          itemStyle: { color: '#7c3aed' },
        },
      ]}
    >
      <Title text="Clustered points" left="center" />
      <Tooltip trigger="item" />
    </ScatterChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Clustered points')).toBeVisible());
    await expect(canvas.getAllByText('10')[0]).toBeVisible();
    await expect(canvas.getAllByText('40')[0]).toBeVisible();
  },
};
