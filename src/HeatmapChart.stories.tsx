import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeatmapChart } from '@fanciers/echarts-react';
import { expect } from 'storybook/test';
import {
  chartContainerId,
  defaultChartStyle,
  expectChartToRender,
  getSeriesTypes,
} from './chart-story-utils.js';

const meta = {
  component: HeatmapChart,
  tags: ['autodocs'],
} satisfies Meta<typeof HeatmapChart>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const WeeklyActivityHeatmap: Story = {
  render: () => (
    <HeatmapChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      tooltip={{ position: 'top' }}
      grid={{ height: '70%', top: '10%' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        splitArea: { show: true },
      }}
      yAxis={{
        type: 'category',
        data: ['Morning', 'Afternoon', 'Evening'],
        splitArea: { show: true },
      }}
      visualMap={{
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: 12,
      }}
      series={[
        {
          type: 'heatmap',
          label: { show: true },
          data: [
            [0, 0, 2],
            [1, 0, 4],
            [2, 0, 6],
            [3, 0, 3],
            [4, 0, 1],
            [0, 1, 5],
            [1, 1, 7],
            [2, 1, 9],
            [3, 1, 6],
            [4, 1, 4],
            [0, 2, 8],
            [1, 2, 6],
            [2, 2, 4],
            [3, 2, 2],
            [4, 2, 1],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ data?: unknown[]; label?: { show?: boolean } }>;

    expect(getSeriesTypes(instance)).toEqual(['heatmap']);
    expect(series[0]?.data).toHaveLength(15);
    expect(series[0]?.label?.show).toBe(true);
    expect((option.visualMap as Array<{ max?: number }>)[0]?.max).toBe(10);
  },
};

export const CalendarIntensity: Story = {
  render: () => (
    <HeatmapChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      title={{ text: 'April contribution calendar', left: 'center' }}
      visualMap={{
        min: 0,
        max: 8,
        orient: 'horizontal',
        left: 'center',
        top: 56,
      }}
      calendar={{
        top: 110,
        left: 40,
        right: 20,
        cellSize: ['auto', 20],
        range: '2026-04',
      }}
      series={[
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: [
            ['2026-04-01', 2],
            ['2026-04-02', 4],
            ['2026-04-03', 1],
            ['2026-04-04', 6],
            ['2026-04-05', 5],
            ['2026-04-06', 8],
            ['2026-04-07', 3],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ coordinateSystem?: string; data?: unknown[] }>;

    expect(getSeriesTypes(instance)).toEqual(['heatmap']);
    expect((option.title as Array<{ text?: string }>)[0]?.text).toBe('April contribution calendar');
    expect((option.calendar as Array<{ range?: string }>)[0]?.range).toBe('2026-04');
    expect(series[0]?.coordinateSystem).toBe('calendar');
    expect(series[0]?.data).toHaveLength(7);
  },
};

export const ShiftCoverage: Story = {
  render: () => (
    <HeatmapChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      xAxis={{
        type: 'category',
        data: ['Zone A', 'Zone B', 'Zone C', 'Zone D'],
      }}
      yAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      }}
      visualMap={{
        min: 0,
        max: 100,
        calculable: true,
        orient: 'vertical',
        right: 8,
        top: 'middle',
      }}
      series={[
        {
          type: 'heatmap',
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.4)',
            },
          },
          data: [
            [0, 0, 94],
            [1, 0, 86],
            [2, 0, 73],
            [3, 0, 58],
            [0, 1, 88],
            [1, 1, 81],
            [2, 1, 70],
            [3, 1, 49],
            [0, 2, 91],
            [1, 2, 83],
            [2, 2, 66],
            [3, 2, 41],
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{
      emphasis?: { itemStyle?: { shadowBlur?: number } };
      data?: unknown[];
    }>;

    expect(getSeriesTypes(instance)).toEqual(['heatmap']);
    expect((option.visualMap as Array<{ orient?: string }>)[0]?.orient).toBe('vertical');
    expect(series[0]?.emphasis?.itemStyle?.shadowBlur).toBe(10);
    expect(series[0]?.data).toHaveLength(12);
  },
};
