import type { Meta, StoryObj } from '@storybook/react-vite';
import { BarChart, CanvasRenderer } from './index.js';

const meta = {
  title: 'AI Generated/Medium/BarChart',
  component: BarChart,
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 320 },
  },
} satisfies Meta<typeof BarChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SalesByQuarter: Story = {
  args: {
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'bar',
        data: [120, 200, 150, 80],
        itemStyle: {
          color: '#1976d2',
        },
      },
    ],
  },
};

export const GroupedSeries: Story = {
  args: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'bar',
        name: 'Email',
        data: [24, 18, 22, 25, 19],
      },
      {
        type: 'bar',
        name: 'Search',
        data: [14, 16, 12, 11, 15],
      },
    ],
  },
};
