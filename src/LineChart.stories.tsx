import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { BarChart, Legend, LineChart, Title, Tooltip } from './index.js';

const chartStyle = {
  width: 640,
  height: 360,
};

const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

type LineChartStoryArgs = Parameters<typeof LineChart>[0];

const meta = {
  component: LineChart,
} satisfies Meta<LineChartStoryArgs>;

export default meta;
type Story = StoryObj<LineChartStoryArgs>;
const noArgs = {} as never;

const createChartPlay = (label: RegExp): NonNullable<Story['play']> => {
  return async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: label });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      const renderedCanvas = chart.querySelector('canvas');
      expect(renderedCanvas).not.toBeNull();
      expect(renderedCanvas?.width ?? 0).toBeGreaterThan(0);
      expect(renderedCanvas?.height ?? 0).toBeGreaterThan(0);
    });
  };
};

export const DailyTrend: Story = {
  args: noArgs,
  render: () => (
    <LineChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Daily sales trend line chart' }}
      xAxis={{
        type: 'category',
        data: weekdayLabels,
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
  play: createChartPlay(/daily sales trend line chart/i),
};

export const RevenueAndTarget: Story = {
  args: noArgs,
  render: () => (
    <LineChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Revenue and target line chart' }}
      xAxis={{
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          name: 'Revenue',
          smooth: true,
          data: [18, 24, 29, 34, 40, 46],
        },
        {
          type: 'line',
          name: 'Target',
          smooth: true,
          lineStyle: { type: 'dashed' },
          data: [16, 22, 27, 31, 36, 42],
        },
      ]}
    >
      <Title title={{ text: 'Revenue vs target', subtext: 'First half of the year' }} />
      <Legend legend={{ top: 12 }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: createChartPlay(/revenue and target line chart/i),
};

export const ComposedBarOverlay: Story = {
  args: noArgs,
  render: () => (
    <LineChart
      compose={[BarChart]}
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Composed bar and line chart' }}
      xAxis={{
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: 'New subscriptions',
          barMaxWidth: 36,
          data: [320, 410, 380, 460],
        },
        {
          type: 'line',
          name: 'Retention',
          smooth: true,
          data: [68, 72, 74, 79],
        },
      ]}
    >
      <Legend legend={{ top: 12 }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: createChartPlay(/composed bar and line chart/i),
};
