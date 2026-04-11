import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { BarChart } from './charts.js';
import { Title, Tooltip, VisualMap } from './components.js';

const meta = {
  component: BarChart,
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateData = () => {
  const data = [];
  for (let x = 0; x < 7; x++) {
    for (let y = 0; y < 24; y++) {
      data.push([x, y, Math.floor(Math.random() * 100)]);
    }
  }
  return data;
};

export const Default: Story = {
  args: {} as never,
  render: () => (
    <BarChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{
        type: 'category',
        data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      }}
      yAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      series={[
        {
          data: generateData(),
          type: 'heatmap',
          label: { show: false },
        } as any,
      ] as any}
    >
      <VisualMap min={0} max={100} />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const WithTooltip: Story = {
  args: {} as never,
  render: () => (
    <BarChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{
        type: 'category',
        data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      }}
      yAxis={{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      }}
      series={[
        {
          data: generateData(),
          type: 'heatmap',
          label: { show: false },
        } as any,
      ] as any}
    >
      <Title text="Activity Heatmap" subtext="Weekly schedule" />
      <VisualMap min={0} max={100} />
      <Tooltip />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};

export const Colored: Story = {
  args: {} as never,
  render: () => (
    <BarChart
      style={{ width: '100%', height: '100%' }}
      xAxis={{
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      }}
      yAxis={{
        type: 'category',
        data: ['1', '2', '3', '4', '5'],
      }}
      series={[
        {
          data: [
            [0, 0, 10],
            [0, 1, 20],
            [0, 2, 30],
            [1, 0, 15],
            [1, 1, 25],
            [1, 2, 35],
            [2, 0, 12],
            [2, 1, 22],
            [2, 2, 32],
          ],
          type: 'heatmap',
          label: { show: true },
        } as any,
      ] as any}
    >
      <Title text="Color Gradient Heatmap" />
      <VisualMap min={0} max={35} inRange={{ color: ['blue', 'cyan', 'lime', 'yellow', 'red'] }} />
      <Tooltip />
    </BarChart>
  ),
  play: async ({ canvasElement }) => {
    const chartDiv = canvasElement.querySelector('div');
    await expect(chartDiv).toBeInTheDocument();
  },
};
