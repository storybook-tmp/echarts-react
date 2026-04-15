import type { Meta, StoryObj } from '@storybook/react-vite';
import { CanvasRenderer, LineChart } from './index.js';

const meta = {
  title: 'AI Generated/Medium/LineChart',
  component: LineChart,
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 320 },
  },
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmoothTrend: Story = {
  args: {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        smooth: true,
        data: [820, 932, 901, 934, 1290, 1330],
      },
    ],
  },
};

export const AreaSeries: Story = {
  args: {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'line',
        areaStyle: {},
        data: [150, 230, 224, 218, 135, 147, 260],
      },
    ],
  },
};
