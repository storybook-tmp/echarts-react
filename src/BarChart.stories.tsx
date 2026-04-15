import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import {
  BarChart,
  Dataset,
  Legend,
  LineChart,
  SVGRenderer,
  Title,
  Toolbox,
  Tooltip,
} from '@fanciers/echarts-react';

const barChartStyle = { width: '100%', height: 360, maxWidth: 760 };

const meta = {
  component: BarChart,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj;

export const QuarterlyRevenue: Story = {
  args: {},
  render: () => (
    <BarChart
      use={SVGRenderer}
      style={barChartStyle}
      title={{ text: 'Quarterly revenue', subtext: 'North America', left: 'center' }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: 'Revenue',
          data: [120, 200, 150, 80],
          itemStyle: { color: '#0f766e' },
        },
      ]}
    >
      <Title text="Quarterly revenue" subtext="North America" left="center" />
      <Tooltip trigger="axis" />
    </BarChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Quarterly revenue')).toBeVisible());
    await expect(canvas.getByText('Q1')).toBeVisible();
    await expect(canvas.getByText('Q4')).toBeVisible();
  },
};

export const RevenueVsTarget: Story = {
  args: {},
  render: () => (
    <BarChart
      use={SVGRenderer}
      compose={[LineChart]}
      style={barChartStyle}
      title={{ text: 'Revenue vs target', left: 'center' }}
      legend={{ top: 24 }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'bar',
          name: 'Revenue',
          data: [98, 132, 101, 134],
          itemStyle: { color: '#2563eb' },
        },
        {
          type: 'line',
          name: 'Target',
          data: [110, 120, 120, 128],
          smooth: true,
          lineStyle: { color: '#f97316', width: 3 },
        },
      ]}
    >
      <Title text="Revenue vs target" left="center" />
      <Legend top={24} />
      <Tooltip trigger="axis" />
    </BarChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Revenue vs target')).toBeVisible());
    await expect(canvas.getByText('Revenue')).toBeVisible();
    await expect(canvas.getByText('Target')).toBeVisible();
  },
};

export const DatasetDrivenSales: Story = {
  args: {},
  render: () => (
    <BarChart
      use={SVGRenderer}
      style={barChartStyle}
      title={{ text: 'Dataset-driven sales', left: 'center' }}
      legend={{ top: 24 }}
      tooltip={{ trigger: 'axis' }}
      dataset={{
        source: [
          ['month', '2025', '2026'],
          ['Jan', 43, 85],
          ['Feb', 83, 73],
          ['Mar', 86, 65],
          ['Apr', 72, 53],
        ],
      }}
      toolbox={{ feature: { saveAsImage: {}, restore: {} } }}
      xAxis={{ type: 'category' }}
      yAxis={{ type: 'value' }}
      series={[
        { type: 'bar', name: '2025', markLine: { data: [{ type: 'average', name: 'Avg' }] } },
        { type: 'bar', name: '2026' },
      ]}
    >
      <Title text="Dataset-driven sales" left="center" />
      <Legend top={24} />
      <Tooltip trigger="axis" />
      <Dataset source={[]} />
      <Toolbox feature={{ saveAsImage: {}, restore: {} }} />
    </BarChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Dataset-driven sales')).toBeVisible());
    await expect(canvas.getByText('Jan')).toBeVisible();
    await expect(canvas.getByText('Apr')).toBeVisible();
  },
};
