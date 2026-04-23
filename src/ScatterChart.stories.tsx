import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { ScatterChart, Tooltip, VisualMap } from './index.js';

const chartStyle = {
  width: 640,
  height: 360,
};

type ScatterChartStoryArgs = Parameters<typeof ScatterChart>[0];

const meta = {
  component: ScatterChart,
} satisfies Meta<ScatterChartStoryArgs>;

export default meta;
type Story = StoryObj<ScatterChartStoryArgs>;
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

export const RevenueVsSpend: Story = {
  args: noArgs,
  render: () => (
    <ScatterChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Revenue versus spend scatter chart' }}
      xAxis={{ type: 'value', name: 'Spend' }}
      yAxis={{ type: 'value', name: 'Revenue' }}
      series={[
        {
          type: 'scatter',
          data: [
            [12, 18],
            [18, 28],
            [24, 33],
            [28, 41],
            [35, 54],
          ],
        },
      ]}
    />
  ),
  play: createChartPlay(/revenue versus spend scatter chart/i),
};

export const BubblePortfolio: Story = {
  args: noArgs,
  render: () => (
    <ScatterChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Bubble portfolio scatter chart' }}
      xAxis={{ type: 'value', name: 'Growth' }}
      yAxis={{ type: 'value', name: 'Margin' }}
      series={[
        {
          type: 'scatter',
          data: [
            [8, 22, 120],
            [12, 28, 180],
            [18, 35, 260],
            [24, 42, 320],
            [31, 48, 410],
          ],
          symbolSize(value) {
            return Number(value[2]) / 10;
          },
        },
      ]}
    >
      <VisualMap
        visualMap={{
          min: 100,
          max: 420,
          dimension: 2,
          orient: 'horizontal',
          left: 'center',
          bottom: 12,
        }}
      />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
  play: createChartPlay(/bubble portfolio scatter chart/i),
};

export const DualSeriesComparison: Story = {
  args: noArgs,
  render: () => (
    <ScatterChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Dual series scatter chart' }}
      xAxis={{ type: 'value', name: 'Latency' }}
      yAxis={{ type: 'value', name: 'Satisfaction' }}
      series={[
        {
          type: 'scatter',
          name: 'Desktop',
          data: [
            [80, 92],
            [96, 88],
            [110, 84],
            [125, 78],
          ],
        },
        {
          type: 'scatter',
          name: 'Mobile',
          data: [
            [105, 90],
            [120, 86],
            [132, 82],
            [148, 76],
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
    </ScatterChart>
  ),
  play: createChartPlay(/dual series scatter chart/i),
};
