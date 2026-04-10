import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart } from '@fanciers/echarts-react';
import { expect } from 'storybook/test';
import {
  chartContainerId,
  defaultChartStyle,
  expectChartToRender,
  getSeriesTypes,
} from './chart-story-utils.js';

const meta = {
  component: BarChart,
  tags: ['autodocs'],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const MonthlyRevenue: Story = {
  render: () => (
    <BarChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      title={{ text: 'Monthly revenue' }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          data: [120, 200, 150, 80, 70, 110],
          itemStyle: {
            borderRadius: [8, 8, 0, 0],
          },
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();

    expect(getSeriesTypes(instance)).toEqual(['bar']);
    expect((option.title as Array<{ text?: string }>)[0]?.text).toBe('Monthly revenue');
    expect((option.xAxis as Array<{ data?: string[] }>)[0]?.data).toEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
    ]);
  },
};

export const RegionalPlanVsActual: Story = {
  render: () => (
    <BarChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      legend={{ top: 8 }}
      tooltip={{ trigger: 'axis' }}
      dataset={{
        source: [
          ['Region', 'Plan', 'Actual'],
          ['North', 320, 301],
          ['South', 240, 210],
          ['East', 149, 133],
          ['West', 186, 202],
        ],
      }}
      xAxis={{ type: 'category' }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', barMaxWidth: 28 },
        { type: 'bar', barMaxWidth: 28 },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();

    expect(getSeriesTypes(instance)).toEqual(['bar', 'bar']);
    expect(((option.dataset as Array<{ source?: unknown[] }>)[0]?.source ?? []).length).toBe(5);
    expect((option.legend as Array<Record<string, unknown>>).length).toBe(1);
  },
};

export const ChannelRanking: Story = {
  render: () => (
    <BarChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      grid={{ left: 120, right: 24, top: 24, bottom: 24 }}
      xAxis={{ type: 'value' }}
      yAxis={{
        type: 'category',
        data: ['Email', 'Organic', 'Referral', 'Paid social', 'Partners'],
      }}
      series={[
        {
          type: 'bar',
          data: [920, 860, 610, 540, 430],
          label: {
            show: true,
            position: 'right',
          },
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ label?: { show?: boolean; position?: string } }>;

    expect(getSeriesTypes(instance)).toEqual(['bar']);
    expect((option.xAxis as Array<{ type?: string }>)[0]?.type).toBe('value');
    expect((option.yAxis as Array<{ data?: string[] }>)[0]?.data?.[0]).toBe('Email');
    expect(series[0]?.label?.position).toBe('right');
  },
};
