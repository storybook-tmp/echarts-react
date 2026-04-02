import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer, HeatmapChart } from './index.js';

const hours = ['12a', '3a', '6a', '9a', '12p', '3p', '6p', '9p'];
const days = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

const meta = {
  title: 'AI Generated/Complex/HeatmapChart',
  component: HeatmapChart,
  args: {
    use: [CanvasRenderer, GridComponent, VisualMapComponent],
    style: { width: '100%', height: 360 },
  },
} satisfies Meta<typeof HeatmapChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ActivityMatrix: Story = {
  args: {
    visualMap: {
      min: 0,
      max: 20,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 0,
    },
    xAxis: {
      type: 'category',
      data: hours,
    },
    yAxis: {
      type: 'category',
      data: days,
    },
    series: [
      {
        type: 'heatmap',
        data: [
          [0, 0, 5],
          [1, 0, 1],
          [2, 0, 0],
          [3, 1, 8],
          [4, 1, 12],
          [5, 2, 9],
          [6, 3, 7],
          [2, 4, 14],
          [5, 5, 18],
          [7, 6, 4],
        ],
      },
    ],
  },
};

export const DenseTraffic: Story = {
  args: {
    visualMap: {
      min: 0,
      max: 20,
      calculable: true,
      orient: 'vertical',
      right: 0,
      top: 'middle',
    },
    xAxis: {
      type: 'category',
      data: hours,
    },
    yAxis: {
      type: 'category',
      data: days,
    },
    series: [
      {
        type: 'heatmap',
        data: [
          [0, 0, 2],
          [1, 0, 4],
          [2, 1, 6],
          [3, 1, 10],
          [4, 2, 11],
          [5, 2, 15],
          [6, 3, 13],
          [7, 3, 17],
          [2, 4, 16],
          [3, 5, 19],
          [4, 6, 12],
          [6, 6, 8],
        ],
      },
    ],
  },
};
