import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { BarChart, Dataset, Legend, Tooltip } from './index.js';

const chartStyle = {
  width: 640,
  height: 360,
};

type BarChartStoryArgs = Parameters<typeof BarChart>[0];

const meta = {
  component: BarChart,
} satisfies Meta<BarChartStoryArgs>;

export default meta;
type Story = StoryObj<BarChartStoryArgs>;
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

export const QuarterlyRevenue: Story = {
  args: noArgs,
  render: () => (
    <BarChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Quarterly revenue bar chart' }}
      xAxis={{
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          barMaxWidth: 44,
          data: [820, 932, 901, 1134],
        },
      ]}
    />
  ),
  play: createChartPlay(/quarterly revenue bar chart/i),
};

export const StackedChannels: Story = {
  args: noArgs,
  render: () => (
    <BarChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Stacked channels bar chart' }}
      xAxis={{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: 'Direct',
          stack: 'traffic',
          data: [120, 132, 101, 134, 90],
        },
        {
          type: 'bar',
          name: 'Partner',
          stack: 'traffic',
          data: [220, 182, 191, 234, 290],
        },
        {
          type: 'bar',
          name: 'Organic',
          stack: 'traffic',
          data: [150, 232, 201, 154, 190],
        },
      ]}
    >
      <Legend legend={{ top: 12 }} />
      <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
    </BarChart>
  ),
  play: createChartPlay(/stacked channels bar chart/i),
};

export const DatasetDriven: Story = {
  args: noArgs,
  render: () => (
    <BarChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Dataset driven bar chart' }}
      xAxis={{ type: 'category' }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: 'North',
          barMaxWidth: 36,
        },
        {
          type: 'bar',
          name: 'South',
          barMaxWidth: 36,
        },
      ]}
    >
      <Dataset
        dataset={{
          source: [
            ['quarter', 'North', 'South'],
            ['Q1', 320, 280],
            ['Q2', 332, 301],
            ['Q3', 301, 334],
            ['Q4', 334, 390],
          ],
        }}
      />
      <Legend legend={{ top: 12 }} />
      <Tooltip tooltip={{ trigger: 'axis', axisPointer: { type: 'shadow' } }} />
    </BarChart>
  ),
  play: createChartPlay(/dataset driven bar chart/i),
};
