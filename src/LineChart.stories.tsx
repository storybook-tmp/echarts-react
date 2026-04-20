import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { BarChart, Dataset, Legend, LineChart, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 560, height: 340 };

const meta = {
  component: LineChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const WeeklyTrend: Story = {
  render: () => (
    <LineChart
      containerProps={{ role: 'img', 'aria-label': 'Weekly revenue line chart' }}
      style={chartStyle}
      xAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      yAxis={{ type: 'value' }}
      series={{
        name: 'Revenue',
        type: 'line',
        smooth: true,
        data: [150, 230, 224, 218, 135, 147, 260],
      }}
    >
      <Title title={{ text: 'Weekly revenue', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Weekly revenue line chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const WithBarComposition: Story = {
  render: () => (
    <LineChart
      compose={[BarChart]}
      containerProps={{ role: 'img', 'aria-label': 'Orders and revenue chart' }}
      style={chartStyle}
      xAxis={{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          name: 'Orders',
          type: 'bar',
          data: [42, 58, 73, 88, 95, 101],
        },
        {
          name: 'Revenue',
          type: 'line',
          smooth: true,
          data: [38, 51, 69, 82, 91, 104],
        },
      ]}
    >
      <Legend legend={{ bottom: 0 }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Orders and revenue chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const WithDataset: Story = {
  render: () => (
    <LineChart
      containerProps={{ role: 'img', 'aria-label': 'Dataset backed visitors chart' }}
      style={chartStyle}
      xAxis={{ type: 'category' }}
      yAxis={{ type: 'value' }}
      series={{
        type: 'line',
        encode: {
          x: 'day',
          y: 'visitors',
        },
      }}
    >
      <Dataset
        dataset={{
          source: [
            ['day', 'visitors'],
            ['Mon', 120],
            ['Tue', 132],
            ['Wed', 101],
            ['Thu', 134],
            ['Fri', 90],
            ['Sat', 230],
            ['Sun', 210],
          ],
        }}
      />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </LineChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Dataset backed visitors chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};
