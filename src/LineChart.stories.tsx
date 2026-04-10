import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Legend, LineChart, SVGRenderer, Title, Tooltip } from '@fanciers/echarts-react';

const lineChartStyle = { width: '100%', height: 360, maxWidth: 760 };

const meta = {
  component: LineChart,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj;

export const MonthlySessions: Story = {
  args: {},
  render: () => (
    <LineChart
      use={SVGRenderer}
      style={lineChartStyle}
      title={{ text: 'Monthly sessions', left: 'center' }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          name: 'Sessions',
          smooth: true,
          data: [120, 182, 191, 234, 290],
          lineStyle: { color: '#6366f1', width: 3 },
          areaStyle: { color: 'rgba(99, 102, 241, 0.18)' },
        },
      ]}
    >
      <Title text="Monthly sessions" left="center" />
      <Tooltip trigger="axis" />
    </LineChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Monthly sessions')).toBeVisible());
    await expect(canvas.getByText('Mon')).toBeVisible();
    await expect(canvas.getByText('Fri')).toBeVisible();
  },
};

export const ConversionFunnels: Story = {
  args: {},
  render: () => (
    <LineChart
      use={SVGRenderer}
      style={lineChartStyle}
      title={{ text: 'Conversion funnels', left: 'center' }}
      legend={{ top: 24 }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          name: 'Organic',
          data: [22, 24, 21, 28],
          smooth: true,
        },
        {
          type: 'line',
          name: 'Paid',
          data: [18, 19, 23, 25],
          smooth: true,
        },
      ]}
    >
      <Title text="Conversion funnels" left="center" />
      <Legend top={24} />
      <Tooltip trigger="axis" />
    </LineChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Conversion funnels')).toBeVisible());
    await expect(canvas.getByText('Organic')).toBeVisible();
    await expect(canvas.getByText('Paid')).toBeVisible();
  },
};

export const StepTrend: Story = {
  args: {},
  render: () => (
    <LineChart
      use={SVGRenderer}
      style={lineChartStyle}
      title={{ text: 'Step trend', left: 'center' }}
      tooltip={{ trigger: 'axis' }}
      xAxis={{ type: 'category', boundaryGap: false, data: ['00:00', '06:00', '12:00', '18:00'] }}
      yAxis={{ type: 'value' }}
      series={[
        {
          type: 'line',
          name: 'Requests',
          step: 'end',
          data: [120, 132, 101, 134],
          lineStyle: { width: 3, color: '#16a34a' },
        },
      ]}
    >
      <Title text="Step trend" left="center" />
      <Tooltip trigger="axis" />
    </LineChart>
  ),
  play: async ({ canvas }) => {
    await waitFor(() => expect(canvas.getByText('Step trend')).toBeVisible());
    await expect(canvas.getByText('00:00')).toBeVisible();
    await expect(canvas.getByText('18:00')).toBeVisible();
  },
};
