import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Legend, PieChart, Title, Tooltip } from './index.js';

const chartStyle = {
  width: 640,
  height: 360,
};

type PieChartStoryArgs = Parameters<typeof PieChart>[0];

const meta = {
  component: PieChart,
} satisfies Meta<PieChartStoryArgs>;

export default meta;
type Story = StoryObj<PieChartStoryArgs>;
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

export const MarketShare: Story = {
  args: noArgs,
  render: () => (
    <PieChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Market share pie chart' }}
      series={[
        {
          type: 'pie',
          radius: '72%',
          data: [
            { value: 1048, name: 'Search' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Affiliate' },
            { value: 300, name: 'Video' },
          ],
        },
      ]}
    />
  ),
  play: createChartPlay(/market share pie chart/i),
};

export const DonutBreakdown: Story = {
  args: noArgs,
  render: () => (
    <PieChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Donut breakdown pie chart' }}
      series={[
        {
          type: 'pie',
          radius: ['48%', '72%'],
          data: [
            { value: 40, name: 'Pro' },
            { value: 28, name: 'Starter' },
            { value: 20, name: 'Enterprise' },
            { value: 12, name: 'Trial' },
          ],
        },
      ]}
    >
      <Title title={{ text: 'Customer plan mix', left: 'center', top: 12 }} />
      <Legend legend={{ orient: 'vertical', right: 12, top: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
  play: createChartPlay(/donut breakdown pie chart/i),
};

export const RoseChart: Story = {
  args: noArgs,
  render: () => (
    <PieChart
      style={chartStyle}
      containerProps={{ role: 'img', 'aria-label': 'Rose chart pie chart' }}
      series={[
        {
          type: 'pie',
          roseType: 'area',
          radius: ['18%', '72%'],
          center: ['48%', '55%'],
          data: [
            { value: 28, name: 'Accessibility' },
            { value: 35, name: 'Testing' },
            { value: 42, name: 'Design' },
            { value: 49, name: 'Docs' },
            { value: 54, name: 'Tooling' },
          ],
        },
      ]}
    >
      <Tooltip tooltip={{ trigger: 'item' }} />
      <Legend legend={{ bottom: 12 }} />
    </PieChart>
  ),
  play: createChartPlay(/rose chart pie chart/i),
};
