import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Legend, PieChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const pieChartStyle = { width: '100%', height: 360, maxWidth: 760 };

const meta = {
  component: PieChart,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj;

export const TrafficSources: Story = {
  args: {},
  render: () => (
    <PieChart
      use={SVGRenderer}
      style={pieChartStyle}
      title={{ text: 'Traffic sources', subtext: 'Last 30 days', left: 'center' }}
      legend={{ orient: 'vertical', right: 16, top: 'middle' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'pie',
          radius: '70%',
          data: [
            { value: 1048, name: 'Search' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
          ],
        },
      ]}
    >
      <Title text="Traffic sources" subtext="Last 30 days" left="center" />
      <Legend orient="vertical" right={16} top="middle" />
      <Tooltip trigger="item" />
    </PieChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Traffic sources')).toBeVisible());
    await expect(canvas.getAllByText('Search')[0]).toBeVisible();
    await expect(canvas.getAllByText('Email')[0]).toBeVisible();
  },
};

export const DonutBreakdown: Story = {
  args: {},
  render: () => (
    <PieChart
      use={SVGRenderer}
      style={pieChartStyle}
      title={{ text: 'Donut breakdown', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'pie',
          radius: ['45%', '72%'],
          label: { show: true, formatter: '{b}' },
          data: [
            { value: 40, name: 'Completed' },
            { value: 32, name: 'In review' },
            { value: 28, name: 'Queued' },
          ],
        },
      ]}
    >
      <Title text="Donut breakdown" left="center" />
      <Tooltip trigger="item" />
    </PieChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Donut breakdown')).toBeVisible());
    await expect(canvas.getByText('Completed')).toBeVisible();
    await expect(canvas.getByText('Queued')).toBeVisible();
  },
};

export const RoseChart: Story = {
  args: {},
  render: () => (
    <PieChart
      use={SVGRenderer}
      style={pieChartStyle}
      title={{ text: 'Rose chart', left: 'center' }}
      tooltip={{ trigger: 'item' }}
      series={[
        {
          type: 'pie',
          roseType: 'area',
          radius: [24, 120],
          center: ['50%', '55%'],
          data: [
            { value: 30, name: 'Design' },
            { value: 28, name: 'Docs' },
            { value: 26, name: 'QA' },
            { value: 24, name: 'Release' },
          ],
        },
      ]}
    >
      <Title text="Rose chart" left="center" />
      <Tooltip trigger="item" />
    </PieChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Rose chart')).toBeVisible());
    await expect(canvas.getByText('Design')).toBeVisible();
    await expect(canvas.getByText('Release')).toBeVisible();
  },
};
