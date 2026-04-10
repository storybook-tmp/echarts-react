import type { Meta, StoryObj } from '@storybook/react-vite';
import { EffectScatterChart } from '@fanciers/echarts-react';
import { expect } from 'storybook/test';
import {
  chartContainerId,
  defaultChartStyle,
  expectChartToRender,
  getSeriesTypes,
} from './chart-story-utils.js';

const meta = {
  component: EffectScatterChart,
  tags: ['autodocs'],
} satisfies Meta<typeof EffectScatterChart>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const PriorityAccounts: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      xAxis={{ type: 'value', name: 'Pipeline fit' }}
      yAxis={{ type: 'value', name: 'Urgency' }}
      series={[
        {
          type: 'effectScatter',
          symbolSize: 18,
          rippleEffect: { scale: 5 },
          data: [
            [10, 20],
            [18, 38],
            [30, 48],
            [46, 62],
            [55, 75],
            [68, 88],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const series = instance.getOption().series as Array<{
      symbolSize?: number;
      rippleEffect?: { scale?: number };
      data?: unknown[];
    }>;

    expect(getSeriesTypes(instance)).toEqual(['effectScatter']);
    expect(series[0]?.symbolSize).toBe(18);
    expect(series[0]?.rippleEffect?.scale).toBe(5);
    expect(series[0]?.data).toHaveLength(6);
  },
};

export const ReleaseMoments: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      title={{ text: 'Release moments', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      xAxis={{ type: 'value', min: 0, max: 24, name: 'Hour' }}
      yAxis={{ type: 'value', min: 0, max: 100, name: 'Impact' }}
      series={[
        {
          type: 'effectScatter',
          showEffectOn: 'render',
          symbolSize: 22,
          data: [
            [3, 18],
            [8, 35],
            [11, 48],
            [14, 72],
            [18, 64],
            [21, 88],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ showEffectOn?: string; symbolSize?: number }>;

    expect(getSeriesTypes(instance)).toEqual(['effectScatter']);
    expect((option.title as Array<{ text?: string }>)[0]?.text).toBe('Release moments');
    expect(series[0]?.showEffectOn).toBe('render');
    expect(series[0]?.symbolSize).toBe(22);
  },
};

export const PolarSignals: Story = {
  render: () => (
    <EffectScatterChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      polar={{ radius: '72%' }}
      angleAxis={{
        type: 'category',
        data: ['North', 'North East', 'East', 'South East', 'South', 'West'],
      }}
      radiusAxis={{}}
      series={[
        {
          type: 'effectScatter',
          coordinateSystem: 'polar',
          rippleEffect: { brushType: 'stroke' },
          data: [
            [2, 'North'],
            [3.5, 'North East'],
            [4.2, 'East'],
            [2.8, 'South East'],
            [3.9, 'South'],
            [2.1, 'West'],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{
      coordinateSystem?: string;
      rippleEffect?: { brushType?: string };
    }>;

    expect(getSeriesTypes(instance)).toEqual(['effectScatter']);
    expect((option.polar as Array<{ radius?: string }>)[0]?.radius).toBe('72%');
    expect(series[0]?.coordinateSystem).toBe('polar');
    expect(series[0]?.rippleEffect?.brushType).toBe('stroke');
  },
};
