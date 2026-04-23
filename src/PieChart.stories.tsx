import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { PieChart } from './charts.js';
import { Legend, Title, Tooltip } from './components.js';

const meta = {
  component: PieChart,
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {} as never,
  render: () => (
    <PieChart
      style={{ width: '100%', height: '100%' }}
      series={[
        {
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Affiliate' },
            { value: 300, name: 'Video Ads' },
          ],
          type: 'pie',
        },
      ]}
    />
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const WithLegend: Story = {
  args: {} as never,
  render: () => (
    <PieChart
      style={{ width: '100%', height: '100%' }}
      series={[
        {
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Affiliate' },
            { value: 300, name: 'Video Ads' },
          ],
          type: 'pie',
        },
      ]}
    >
      <Legend orient="vertical" left="left" />
      <Tooltip />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const Donut: Story = {
  args: {} as never,
  render: () => (
    <PieChart
      style={{ width: '100%', height: '100%' }}
      series={[
        {
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Affiliate' },
            { value: 300, name: 'Video Ads' },
          ],
          type: 'pie',
          radius: ['40%', '70%'],
        },
      ]}
    >
      <Title text="Traffic Distribution" subtext="Q1 2024" />
      <Legend />
      <Tooltip />
    </PieChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};
