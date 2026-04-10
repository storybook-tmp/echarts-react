import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart, ScatterChart } from '@fanciers/echarts-react';
import { expect } from 'storybook/test';
import {
  chartContainerId,
  defaultChartStyle,
  expectChartToRender,
  getSeriesTypes,
} from './chart-story-utils.js';

const meta = {
  component: ScatterChart,
  tags: ['autodocs'],
} satisfies Meta<typeof ScatterChart>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const LeadQualityDistribution: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      xAxis={{ type: 'value', name: 'Lead score' }}
      yAxis={{ type: 'value', name: 'Deal size' }}
      series={[
        {
          type: 'scatter',
          symbolSize: 14,
          data: [
            [18, 32],
            [24, 44],
            [31, 28],
            [38, 62],
            [42, 71],
            [55, 88],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const series = instance.getOption().series as Array<{ data?: unknown[]; symbolSize?: number }>;

    expect(getSeriesTypes(instance)).toEqual(['scatter']);
    expect(series[0]?.data).toHaveLength(6);
    expect(series[0]?.symbolSize).toBe(14);
  },
};

export const BubblePerformance: Story = {
  render: () => (
    <ScatterChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      title={{ text: 'Account health', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      visualMap={{
        min: 20,
        max: 90,
        dimension: 2,
        orient: 'horizontal',
        left: 'center',
        bottom: 12,
      }}
      xAxis={{ type: 'value', name: 'Retention' }}
      yAxis={{ type: 'value', name: 'Expansion' }}
      series={[
        {
          type: 'scatter',
          data: [
            [15, 20, 22],
            [20, 42, 30],
            [40, 45, 50],
            [52, 68, 63],
            [67, 76, 82],
            [75, 84, 90],
          ],
          symbolSize: 20,
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();

    expect(getSeriesTypes(instance)).toEqual(['scatter']);
    expect((option.title as Array<{ text?: string }>)[0]?.text).toBe('Account health');
    expect((option.visualMap as Array<{ max?: number; dimension?: number }>)[0]?.max).toBe(90);
    expect((option.visualMap as Array<{ max?: number; dimension?: number }>)[0]?.dimension).toBe(2);
  },
};

export const ScatterWithTrendline: Story = {
  render: () => (
    <ScatterChart
      compose={[LineChart]}
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'value', min: 0, max: 100 }}
      yAxis={{ type: 'value', min: 0, max: 100 }}
      series={[
        {
          type: 'scatter',
          name: 'Accounts',
          data: [
            [12, 18],
            [24, 35],
            [38, 42],
            [51, 63],
            [66, 72],
            [78, 86],
          ],
        },
        {
          type: 'line',
          name: 'Trend',
          smooth: true,
          symbol: 'none',
          data: [
            [10, 16],
            [30, 36],
            [50, 58],
            [70, 78],
            [90, 92],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const series = instance.getOption().series as Array<{ name?: string; symbol?: string }>;

    expect(getSeriesTypes(instance)).toEqual(['scatter', 'line']);
    expect(series.map((entry) => entry.name)).toEqual(['Accounts', 'Trend']);
    expect(series[1]?.symbol).toBe('none');
  },
};
