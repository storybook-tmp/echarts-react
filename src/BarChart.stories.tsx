import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { BarChart, DataZoom, Legend, Title, Toolbox, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 560, height: 340 };

const meta = {
  component: BarChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const MonthlySales: Story = {
  render: () => (
    <BarChart
      containerProps={{ role: 'img', 'aria-label': 'Monthly sales bar chart' }}
      style={chartStyle}
      xAxis={{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      }}
      yAxis={{ type: 'value' }}
      series={{
        name: 'Sales',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110],
      }}
    >
      <Title title={{ text: 'Monthly sales', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </BarChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Monthly sales bar chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const StackedChannels: Story = {
  render: () => (
    <BarChart
      containerProps={{ role: 'img', 'aria-label': 'Stacked channel revenue chart' }}
      style={chartStyle}
      xAxis={{
        type: 'category',
        data: ['Search', 'Email', 'Social', 'Partners'],
      }}
      yAxis={{ type: 'value' }}
      series={[
        {
          name: 'New',
          type: 'bar',
          stack: 'channel',
          data: [62, 38, 44, 27],
        },
        {
          name: 'Returning',
          type: 'bar',
          stack: 'channel',
          data: [31, 26, 19, 14],
        },
      ]}
    >
      <Legend legend={{ bottom: 0 }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </BarChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Stacked channel revenue chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const WithControls: Story = {
  render: () => (
    <BarChart
      containerProps={{ role: 'img', 'aria-label': 'Controllable operations bar chart' }}
      style={chartStyle}
      xAxis={{
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      }}
      yAxis={{ type: 'value' }}
      series={{
        name: 'Operations',
        type: 'bar',
        data: [32, 45, 61, 72, 69, 86, 93, 105],
      }}
    >
      <DataZoom dataZoom={{ type: 'slider', start: 15, end: 75 }} />
      <Toolbox toolbox={{ right: 16, feature: { restore: {}, saveAsImage: {} } }} />
      <Tooltip tooltip={{ trigger: 'axis' }} />
    </BarChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Controllable operations bar chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};
