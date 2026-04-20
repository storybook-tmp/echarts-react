import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';
import { Legend, PieChart, Title, Tooltip } from '@fanciers/echarts-react';

const chartStyle = { width: 480, height: 360 };

const meta = {
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TrafficShare: Story = {
  render: () => (
    <PieChart
      containerProps={{ role: 'img', 'aria-label': 'Traffic share pie chart' }}
      style={chartStyle}
      series={{
        name: 'Traffic',
        type: 'pie',
        radius: '65%',
        data: [
          { value: 1048, name: 'Search' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Social' },
        ],
      }}
    >
      <Title title={{ text: 'Traffic share', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Traffic share pie chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const DonutBreakdown: Story = {
  render: () => (
    <PieChart
      containerProps={{ role: 'img', 'aria-label': 'Subscription mix donut chart' }}
      style={chartStyle}
      series={{
        name: 'Subscriptions',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: true,
        data: [
          { value: 45, name: 'Starter' },
          { value: 32, name: 'Team' },
          { value: 18, name: 'Business' },
          { value: 5, name: 'Enterprise' },
        ],
      }}
    >
      <Legend legend={{ bottom: 0 }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Subscription mix donut chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};

export const RoseCategories: Story = {
  render: () => (
    <PieChart
      containerProps={{ role: 'img', 'aria-label': 'Category rose pie chart' }}
      style={chartStyle}
      series={{
        name: 'Categories',
        type: 'pie',
        radius: [24, 130],
        roseType: 'radius',
        data: [
          { value: 40, name: 'Design' },
          { value: 38, name: 'Engineering' },
          { value: 32, name: 'Support' },
          { value: 30, name: 'Marketing' },
          { value: 28, name: 'Sales' },
        ],
      }}
    >
      <Title title={{ text: 'Team allocation', left: 'center' }} />
      <Tooltip tooltip={{ trigger: 'item' }} />
    </PieChart>
  ),
  play: async ({ canvas }) => {
    const chart = canvas.getByRole('img', { name: 'Category rose pie chart' });

    await expect(chart).toBeVisible();
    await waitFor(() => {
      expect(chart.querySelector('canvas')).toBeInstanceOf(HTMLCanvasElement);
    });
  },
};
