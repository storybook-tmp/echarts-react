import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, LineChart } from '@fanciers/echarts-react';
import { expect } from 'storybook/test';
import {
  chartContainerId,
  defaultChartStyle,
  expectChartToRender,
  getSeriesTypes,
} from './chart-story-utils.js';

const meta = {
  component: LineChart,
  tags: ['autodocs'],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const WeeklyTraffic: Story = {
  render: () => (
    <LineChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      xAxis={{
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          smooth: true,
          data: [150, 230, 224, 218, 135, 147, 260],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);

    expect(getSeriesTypes(instance)).toEqual(['line']);
    expect((instance.getOption().xAxis as Array<{ data?: string[] }>)[0]?.data).toEqual([
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ]);
  },
};

export const AcquisitionMix: Story = {
  render: () => (
    <LineChart
      compose={[BarChart]}
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      xAxis={{
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: 'Signups',
          data: [420, 510, 610, 720],
          barMaxWidth: 28,
        },
        {
          type: 'line',
          name: 'Conversion rate',
          smooth: true,
          data: [31, 34, 38, 43],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const series = instance.getOption().series as Array<{ barMaxWidth?: number; smooth?: boolean }>;

    expect(getSeriesTypes(instance)).toEqual(['bar', 'line']);
    expect(series[0]?.barMaxWidth).toBe(28);
    expect(series[1]?.smooth).toBe(true);
  },
};

export const PlannedVsActual: Story = {
  render: () => (
    <LineChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      xAxis={{
        type: 'category',
        boundaryGap: false,
        data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          name: 'Planned',
          data: [80, 110, 140, 170, 210],
          lineStyle: { type: 'dashed' },
        },
        {
          type: 'line',
          name: 'Actual',
          smooth: true,
          areaStyle: {},
          data: [76, 103, 150, 182, 198],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const series = instance.getOption().series as Array<{
      name?: string;
      areaStyle?: object;
      lineStyle?: { type?: string };
    }>;

    expect(getSeriesTypes(instance)).toEqual(['line', 'line']);
    expect(series.map((entry) => entry.name)).toEqual(['Planned', 'Actual']);
    expect(series[0]?.lineStyle?.type).toBe('dashed');
    expect(series[1]?.areaStyle).toBeTruthy();
  },
};
