import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from '@fanciers/echarts-react';
import { expect } from 'storybook/test';
import {
  chartContainerId,
  defaultChartStyle,
  expectChartToRender,
  getSeriesTypes,
} from './chart-story-utils.js';

const meta = {
  component: PieChart,
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<Record<string, never>>;

export const MarketShare: Story = {
  render: () => (
    <PieChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      title={{ text: 'Market share', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      legend={{ bottom: 0 }}
      series={[
        {
          type: 'pie',
          radius: '72%',
          data: [
            { value: 1048, name: 'Search' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ radius?: string | string[]; data?: unknown[] }>;

    expect(getSeriesTypes(instance)).toEqual(['pie']);
    expect((option.title as Array<{ text?: string }>)[0]?.text).toBe('Market share');
    expect(series[0]?.radius).toBe('72%');
    expect(series[0]?.data).toHaveLength(4);
  },
};

export const DonutConversion: Story = {
  render: () => (
    <PieChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      tooltip={{ trigger: 'item' }}
      legend={{ orient: 'vertical', left: 'left' }}
      series={[
        {
          type: 'pie',
          radius: ['42%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          data: [
            { value: 420, name: 'Activated' },
            { value: 180, name: 'Invited' },
            { value: 95, name: 'Qualified' },
            { value: 60, name: 'Waiting list' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ radius?: string[]; avoidLabelOverlap?: boolean }>;

    expect(getSeriesTypes(instance)).toEqual(['pie']);
    expect(series[0]?.radius).toEqual(['42%', '70%']);
    expect(series[0]?.avoidLabelOverlap).toBe(false);
    expect((option.legend as Array<{ orient?: string }>)[0]?.orient).toBe('vertical');
  },
};

export const PortfolioBreakdown: Story = {
  render: () => (
    <PieChart
      containerProps={{ id: chartContainerId }}
      style={defaultChartStyle}
      title={{ text: 'Portfolio breakdown', subtext: 'Nested allocation', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '34%'],
          label: {
            position: 'inner',
          },
          data: [
            { value: 1548, name: 'Core' },
            { value: 775, name: 'Growth' },
          ],
        },
        {
          type: 'pie',
          radius: ['48%', '72%'],
          data: [
            { value: 1048, name: 'Infrastructure' },
            { value: 500, name: 'Operations' },
            { value: 300, name: 'Apps' },
            { value: 475, name: 'New markets' },
            { value: 300, name: 'Partnerships' },
          ],
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const { instance } = await expectChartToRender(canvasElement);
    const option = instance.getOption();
    const series = option.series as Array<{ selectedMode?: string; radius?: Array<number | string> }>;

    expect(getSeriesTypes(instance)).toEqual(['pie', 'pie']);
    expect((option.title as Array<{ subtext?: string }>)[0]?.subtext).toBe('Nested allocation');
    expect(series[0]?.selectedMode).toBe('single');
    expect(series[1]?.radius).toEqual(['48%', '72%']);
  },
};
