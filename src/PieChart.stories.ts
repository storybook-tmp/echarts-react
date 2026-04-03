import type { Meta, StoryObj } from '@storybook/react-vite';
import { PieChart } from './charts';

const meta = {
  title: 'AI Generated/Simple/PieChart',
  component: PieChart,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: { width: '400px', height: '400px' },
    series: [
      {
        type: 'pie',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
        ],
      },
    ],
  },
};

export const Donut: Story = {
  args: {
    style: { width: '400px', height: '400px' },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 400, name: 'Desktop' },
          { value: 335, name: 'Mobile' },
          { value: 100, name: 'Tablet' },
        ],
      },
    ],
  },
};
