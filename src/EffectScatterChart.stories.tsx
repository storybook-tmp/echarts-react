import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { EffectScatterChart, LineChart, Tooltip } from './index.js';

const chartStyle = {
  width: 640,
  height: 360,
};

type EffectScatterChartStoryArgs = Parameters<typeof EffectScatterChart>[0];

const meta = {
  component: EffectScatterChart,
} satisfies Meta<EffectScatterChartStoryArgs>;

export default meta;
type Story = StoryObj<EffectScatterChartStoryArgs>;
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

export const HighlightedCities: Story = {
  args: noArgs,
  render: () => (
    <EffectScatterChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Highlighted cities effect scatter chart' }}
      xAxis={{ type: 'value', name: 'Longitude' }}
      yAxis={{ type: 'value', name: 'Latitude' }}
      series={[
        {
          type: 'effectScatter',
          rippleEffect: { scale: 4 },
          symbolSize: 18,
          data: [
            [106.7, 10.8],
            [121.5, 25.0],
            [139.7, 35.6],
            [151.2, -33.9],
          ],
        },
      ]}
    />
  ),
  play: createChartPlay(/highlighted cities effect scatter chart/i),
};

export const ConversionMilestones: Story = {
  args: noArgs,
  render: () => (
    <EffectScatterChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Conversion milestones effect scatter chart' }}
      xAxis={{
        type: 'category',
        data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'effectScatter',
          showEffectOn: 'render',
          rippleEffect: { brushType: 'stroke' },
          data: [18, 22, 31, 39, 46],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </EffectScatterChart>
  ),
  play: createChartPlay(/conversion milestones effect scatter chart/i),
};

export const ComposedTrendline: Story = {
  args: noArgs,
  render: () => (
    <EffectScatterChart
      compose={[LineChart]}
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Composed trendline effect scatter chart' }}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          smooth: true,
          data: [12, 16, 21, 28, 35],
        },
        {
          type: 'effectScatter',
          rippleEffect: { scale: 3 },
          symbolSize: 14,
          data: [12, 16, 21, 28, 35],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </EffectScatterChart>
  ),
  play: createChartPlay(/composed trendline effect scatter chart/i),
};
