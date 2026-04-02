import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from './charts';

const meta = {
  title: 'AI Generated/Simple/PieChart',
  component: PieChart,
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    style: { width: 400, height: 400 },
    series: [
      {
        type: 'pie',
        data: [
          { value: 1048, name: 'Search' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Social' },
          { value: 300, name: 'Video' },
        ],
      },
    ],
  },
};

export const Donut: Story = {
  args: {
    style: { width: 400, height: 400 },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 1048, name: 'Search' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
        ],
      },
    ],
  },
};
