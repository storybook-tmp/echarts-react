import type { Meta, StoryObj } from '@storybook/react-vite';
import { CanvasRenderer, PieChart } from './index.js';

const meta = {
  title: 'AI Generated/Medium/PieChart',
  component: PieChart,
  args: {
    use: CanvasRenderer,
    style: { width: '100%', height: 320 },
  },
} satisfies Meta<typeof PieChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Donut: Story = {
  args: {
    series: [
      {
        type: 'pie',
        radius: ['45%', '70%'],
        data: [
          { value: 1048, name: 'Search' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
        ],
      },
    ],
  },
};

export const RoseChart: Story = {
  args: {
    series: [
      {
        type: 'pie',
        roseType: 'area',
        radius: [24, 110],
        center: ['50%', '50%'],
        data: [
          { value: 40, name: 'Rose 1' },
          { value: 33, name: 'Rose 2' },
          { value: 28, name: 'Rose 3' },
          { value: 22, name: 'Rose 4' },
          { value: 20, name: 'Rose 5' },
        ],
      },
    ],
  },
};
